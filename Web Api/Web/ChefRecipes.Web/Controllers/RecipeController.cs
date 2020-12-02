using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChefRecipes.Web.Controllers
{
    public class RecipeController : BaseController
    {
        [Authorize]
        public IActionResult Get()
        {
            return this.Ok("Works");
        }
    }
}
