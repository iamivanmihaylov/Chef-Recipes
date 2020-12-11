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
            var recipe = this.recipeRepository.All().Where(r => r.Id == id).FirstOrDefault();
            return recipe;
        }

        public async Task<int> PostAsync(string title, string description, string imageUrl, ApplicationUser user)
        {
            var recipe = new Recipe()
            {
                Title = title,
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
