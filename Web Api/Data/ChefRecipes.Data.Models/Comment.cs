namespace ChefRecipes.Data.Models
{
    using ChefRecipes.Data.Common.Models;

    public class Comment : BaseDeletableModel<int>
    {
        public string Text { get; set; }

        public int RecipeId { get; set; }

        public virtual Recipe Recipe { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
