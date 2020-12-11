using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ChefRecipes.Services.Data
{
    public interface IIngredientService
    {
        Task Create(string ingredientName, double amount, string type,int postId);
    }
}
