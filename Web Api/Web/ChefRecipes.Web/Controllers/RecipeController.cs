namespace ChefRecipes.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    public class RecipeController : BaseController
    {
        [Authorize]
        public IActionResult Get()
        {
            return this.Ok("Works");
        }
    }
}
