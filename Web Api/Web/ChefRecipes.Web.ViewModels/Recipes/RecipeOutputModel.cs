using ChefRecipes.Data.Models;
using ChefRecipes.Services.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChefRecipes.Web.ViewModels.Recipes
{
    public class RecipeOutputModel : IMapFrom<Recipe>
    {
        public RecipeOutputModel()
        {
            this.Ingredients = new HashSet<Ingredient>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageURL { get; set; }

        public string UserUserName { get; set; }

        public string UserId { get; set; }

        public int CommentsCount { get; set; }

        public ICollection<Ingredient> Ingredients { get; set; }

    }
}
