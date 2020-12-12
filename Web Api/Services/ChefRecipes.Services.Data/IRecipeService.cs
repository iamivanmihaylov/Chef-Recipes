namespace ChefRecipes.Services.Data
{
    using System.Collections.Generic;
    using System.Text;
    using System.Threading.Tasks;

    using ChefRecipes.Data.Models;

    public interface IRecipeService
    {
        IEnumerable<T> GetAll<T>();

        T GetById<T>(int id);

        Task DeleteAsync(int id);

        Task<int> PostAsync(string title, string description, string imageUrl, ApplicationUser user);
    }
}
