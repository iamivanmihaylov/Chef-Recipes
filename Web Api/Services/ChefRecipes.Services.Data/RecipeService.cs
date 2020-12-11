namespace ChefRecipes.Services.Data
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using ChefRecipes.Data.Common.Repositories;
    using ChefRecipes.Data.Models;

    public class RecipeService : IRecipeService
    {
        private readonly IDeletableEntityRepository<Recipe> recipeRepository;

        public RecipeService(IDeletableEntityRepository<Recipe> recipeRepository)
        {
            this.recipeRepository = recipeRepository;
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Recipe> GetAll()
        {
            var recipes = this.recipeRepository.All();
            return recipes.ToList();
        }

        public Recipe GetById(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<int> PostAsync(string description, string imageUrl, ApplicationUser user)
        {
            var recipe = new Recipe()
            {
                Description = description,
                ImageURL = imageUrl,
                UserId = user.Id,
            };

            await this.recipeRepository.AddAsync(recipe);
            await this.recipeRepository.SaveChangesAsync();

            return recipe.Id;
        }
    }
}
