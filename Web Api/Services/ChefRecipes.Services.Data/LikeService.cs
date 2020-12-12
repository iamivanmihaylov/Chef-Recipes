namespace ChefRecipes.Services.Data
{
    using ChefRecipes.Data.Common.Repositories;
    using ChefRecipes.Data.Models;
    using System;
    using System.Linq;
    using System.Threading.Tasks;

    public class LikeService : ILikeService
    {
        private readonly IRepository<Like> likesRepository;

        public LikeService(IRepository<Like> likesRepository)
        {
            this.likesRepository = likesRepository;
        }

        public async Task<int> Dislike(int postId, string userId)
        {
            var like = this.likesRepository.All().Where(l => l.RecipeId == postId && l.UserId == userId).FirstOrDefault();

            this.likesRepository.Delete(like);
            await this.likesRepository.SaveChangesAsync();

            var allPostLikes = this.likesRepository.All().Where(l => l.RecipeId == postId).ToList().Count;
            return allPostLikes;
        }

        public int GetAllPostLikes(int postId)
        {
            var allPostLikes = this.likesRepository.All().Where(l => l.RecipeId == postId).ToList().Count;
            return allPostLikes;
        }

        public bool IsLiked(int postId, string userId)
        {
            var isLiked = this.likesRepository.All().Where(p => p.RecipeId == postId).Any(l => l.UserId == userId);
            return isLiked;
        }

        public async Task<int> Like(int postId, string userId)
        {
            var like = new Like()
            {
                RecipeId = postId,
                UserId = userId,
                IsLiked = true,
            };

            await this.likesRepository.AddAsync(like);
            await this.likesRepository.SaveChangesAsync();

            var allPostLikes = this.likesRepository.All().Where(l => l.RecipeId == postId).ToList().Count;

            return allPostLikes;
        }
    }
}
