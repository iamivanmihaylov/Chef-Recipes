using ChefRecipes.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChefRecipes.Web.ViewModels.Recipes
{
    public class RecipeInputModel
    {
        public string Title { get; set; }

        public string Description { get; set; }

        public string ImageURL { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}
