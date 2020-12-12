namespace ChefRecipes.Services.Data
{
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;

    public interface ILikeService
    {
        Task<int> Like(int postId, string userId);

        Task<int> Dislike(int postId, string userId);

        int GetAllPostLikes(int postId);

        bool IsLiked(int postId, string userId);
    }
}
