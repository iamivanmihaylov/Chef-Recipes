namespace ChefRecipes.Data.Models
{
    using ChefRecipes.Data.Common.Models;

    public class Ingredient : BaseDeletableModel<int>
    {
        public int RecipeId { get; set; }

        public virtual Recipe Recipe { get; set; }

        public string IngredientName { get; set; }

        public double Amount { get; set; }

        public string Type { get; set; }
    }
}
