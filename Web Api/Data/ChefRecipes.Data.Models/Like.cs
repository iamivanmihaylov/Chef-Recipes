namespace ChefRecipes.Data.Models
{
    using ChefRecipes.Data.Common.Models;

    public class Like : BaseModel<int>
    {
        public bool IsLiked { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public int RecipeId { get; set; }

        public virtual Recipe Recipe { get; set; }
    }
}
