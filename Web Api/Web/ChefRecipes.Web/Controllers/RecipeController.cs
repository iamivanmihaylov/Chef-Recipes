namespace ChefRecipes.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using ChefRecipes.Data.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    public class RecipeController : BaseController
    {
        private readonly UserManager<ApplicationUser> userManager;

        public RecipeController(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }

        [Authorize]
        [HttpGet]
        public IActionResult Get()
        {
            return this.Ok("Works");
        }
    }
}
