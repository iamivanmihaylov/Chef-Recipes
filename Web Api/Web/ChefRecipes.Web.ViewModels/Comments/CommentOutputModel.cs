using ChefRecipes.Data.Models;
using ChefRecipes.Services.Mapping;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChefRecipes.Web.ViewModels.Comments
{
    public class CommentOutputModel : IMapFrom<Comment>
    {
        public string UserId { get; set; }

        public string UserUserName { get; set; }

        public string Text { get; set; }

        public int RecipeId { get; set; }
    }
}
