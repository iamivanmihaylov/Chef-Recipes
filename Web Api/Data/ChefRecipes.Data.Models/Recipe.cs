namespace ChefRecipes.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    using ChefRecipes.Data.Common.Models;

    public class Recipe : BaseDeletableModel<int>
    {
        public Recipe()
        {
            this.Ingredients = new HashSet<Ingredient>();
        }

        public string Description { get; set; }

        public string ImageURL { get; set; }

        public virtual ICollection<Ingredient> Ingredients { get; set; }

        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<Comment> Comments { get; set; }

        public virtual ICollection<Like> Likes { get; set; }
    }
}
