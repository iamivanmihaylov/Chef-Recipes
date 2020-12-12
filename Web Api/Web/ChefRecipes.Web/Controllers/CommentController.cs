namespace ChefRecipes.Web.Controllers
{
    using ChefRecipes.Data.Models;
    using ChefRecipes.Services.Data;
    using ChefRecipes.Web.ViewModels.Comments;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;

    public class CommentController : BaseController
    {
        private readonly ICommentService commentService;
        private readonly UserManager<ApplicationUser> userManager;

        public CommentController(ICommentService commentService, UserManager<ApplicationUser> userManager)
        {
            this.commentService = commentService;
            this.userManager = userManager;
        }

        [HttpGet("{postId}")]
        public IActionResult Get(int postId)
        {
            var allRecipes = this.commentService.GetAllPostComments<CommentOutputModel>(postId);
            return this.Ok(allRecipes);
        }

        [Authorize]
        [HttpPost("{postId}")]
        public async Task<IActionResult> Post(CommentInputModel inputModel, int postId)
        {
            var userId = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var currnetUser = await this.userManager.FindByIdAsync(userId);

            var res = await this.commentService.CreateAsync<CommentOutputModel>(inputModel.Text, currnetUser.Id, postId);

            return this.Ok(res);
        }

        [Authorize]
        [HttpDelete]
        public IActionResult Delete()
        {
            return this.Ok("Works");
        }
    }
}
