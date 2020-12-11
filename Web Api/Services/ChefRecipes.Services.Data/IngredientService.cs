using ChefRecipes.Data.Common.Repositories;
using ChefRecipes.Data.Models;
using System;
using System.Threading.Tasks;

namespace ChefRecipes.Services.Data
{
    public class IngredientService : IIngredientService
    {
        private readonly IDeletableEntityRepository<Ingredient> ingredientsRepostory;

        public IngredientService(IDeletableEntityRepository<Ingredient> ingredientsRepostory)
        {
            this.ingredientsRepostory = ingredientsRepostory;
        }

        public async Task Create(string ingredientName, double amount, string type, int postId)
        {
            var ingredient = new Ingredient()
            {
                IngredientName = ingredientName,
                Amount = amount,
                Type = type,
                RecipeId = postId,
            };

            await this.ingredientsRepostory.AddAsync(ingredient);
            await this.ingredientsRepostory.SaveChangesAsync();
        }
    }
}
