using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChefRecipes.Services.Data
{
    public interface ICommentService
    {

        Task<IEnumerable<T>> CreateAsync<T>(string text, string userId, int recipeId);

        IEnumerable<T> GetAllPostComments<T>(int recipeId);

    }
}
