namespace ChefRecipes.Web.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class CommentController : BaseController
    {
        [HttpGet]
        public IActionResult Get()
        {
            return this.Ok("Works");
        }

        [Authorize]
        [HttpPost]
        public IActionResult Post()
        {
            return this.Ok("Works");
        }

        [Authorize]
        [HttpDelete]
        public IActionResult Delete()
        {
            return this.Ok("Works");
        }
    }
}
