using ChefRecipes.Data.Common.Repositories;
using ChefRecipes.Data.Models;
using ChefRecipes.Services.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChefRecipes.Services.Data
{
    public class CommentService : ICommentService
    {
        private readonly IDeletableEntityRepository<Comment> commentRepository;

        public CommentService(IDeletableEntityRepository<Comment> commentRepository)
        {
            this.commentRepository = commentRepository;
        }

        public async Task<IEnumerable<T>> CreateAsync<T>(string text, string userId, int recipeId)
        {
            var comment = new Comment()
            {
                Text = text,
                UserId = userId,
                RecipeId = recipeId,
            };

            await this.commentRepository.AddAsync(comment);
            await this.commentRepository.SaveChangesAsync();

            var allComments = this.commentRepository.All().Where(c => c.RecipeId == recipeId).To<T>().ToList();

            return allComments;
        }

        public IEnumerable<T> GetAllPostComments<T>(int recipeId)
        {
            var allComments = this.commentRepository.All().Where(c => c.RecipeId == recipeId).To<T>().ToList();

            if (allComments == null)
            {
                return new List<T>();
            }

            return allComments;
        }
    }
}
