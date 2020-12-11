using ChefRecipes.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChefRecipes.Web.ViewModels.Recipe
{
    public class RecipeInputModel
    {
        public string Description { get; set; }

        public string ImageURL { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }
    }
}
