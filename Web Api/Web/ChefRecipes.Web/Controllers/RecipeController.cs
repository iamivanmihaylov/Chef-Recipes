namespace ChefRecipes.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;

    using ChefRecipes.Data.Models;
    using ChefRecipes.Services.Data;
    using ChefRecipes.Web.ViewModels.Recipes;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    public class RecipeController : BaseController
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IRecipeService recipeService;
        private readonly IIngredientService ingredientService;

        public RecipeController(UserManager<ApplicationUser> userManager, IRecipeService recipeService, IIngredientService ingredientService)
        {
            this.userManager = userManager;
            this.recipeService = recipeService;
            this.ingredientService = ingredientService;
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var recipe = this.recipeService.GetById<RecipeOutputModel>(id);

            if (recipe == null)
            {
                return this.NotFound();
            }

            recipe.Ingredients = this.ingredientService.GetAllRecipeIngredients(id).ToList();

            return this.Ok(recipe);
        }

        [HttpGet]
        public IActionResult Get(string userId)
        {
            if (userId != null)
            {
                return this.Ok(this.recipeService.GetAll<RecipeOutputModel>().Where(r => r.UserId == userId));
            }

            var allRecipes = this.recipeService.GetAll<RecipeOutputModel>();
            return this.Ok(allRecipes);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult DeletById()
        {
            return this.Ok("Works");
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Post(RecipeInputModel inputModel)
        {
            var userId = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var user = await this.userManager.FindByIdAsync(userId);

            var recipeId = await this.recipeService.PostAsync(inputModel.Title,inputModel.Description, inputModel.ImageURL, user);

            foreach (var ingredient in inputModel.Ingredients)
            {
                await this.ingredientService.Create(ingredient.IngredientName, ingredient.Amount, ingredient.Type, recipeId);
            }

            return this.Created("recipe", new { id = recipeId });
        }
    }
}
