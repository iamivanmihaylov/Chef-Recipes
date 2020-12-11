namespace ChefRecipes.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    public class LikeController : BaseController
    {

        [HttpGet("{recipeId}")]
        public IActionResult Get()
        {
            return this.Ok("Works");
        }

        [Authorize]
        [HttpPost("{recipeId}")]
        public IActionResult Post()
        {
            // TODO: Create inout model!
            return this.Ok("Works");
        }

        [Authorize]
        [HttpDelete("{recipeId}")]
        public IActionResult Delete()
        {
            return this.Ok("Works");
        }

    }
}
