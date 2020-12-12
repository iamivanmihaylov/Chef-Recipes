namespace ChefRecipes.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Claims;
    using System.Threading.Tasks;
    using ChefRecipes.Data.Models;
    using ChefRecipes.Services.Data;
    using ChefRecipes.Web.ViewModels;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;

    public class LikeController : BaseController
    {
        private readonly ILikeService likeService;
        private readonly UserManager<ApplicationUser> userManager;

        public LikeController(ILikeService likeService,UserManager<ApplicationUser> userManager)
        {
            this.likeService = likeService;
            this.userManager = userManager;
        }

        [HttpGet("{recipeId}")]
        public async Task<IActionResult> Get(int recipeId)
        {
            var userId = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var currentUser = await this.userManager.FindByIdAsync(userId);
            var allLikes = this.likeService.GetAllPostLikes(recipeId);

            var outputModel = new LikeOutputModel()
            {
                IsLiked = this.likeService.IsLiked(recipeId, currentUser.Id),
                LikesCount = allLikes,
            };

            return this.Ok(outputModel);
        }

        [Authorize]
        [HttpPost("{recipeId}")]
        public async Task<IActionResult> Post(int recipeId)
        {
            var userId = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var currentUser = await this.userManager.FindByIdAsync(userId);
            var allLikes = await this.likeService.Like(recipeId, currentUser.Id);

            var outputModel = new LikeOutputModel()
            {
                IsLiked = this.likeService.IsLiked(recipeId, currentUser.Id),
                LikesCount = allLikes,
            };

            return this.Ok(outputModel);
        }

        [Authorize]
        [HttpDelete("{recipeId}")]
        public async Task<IActionResult> Delete(int recipeId)
        {
            var userId = this.User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value;
            var currentUser = await this.userManager.FindByIdAsync(userId);
            var allLikes = await this.likeService.Dislike(recipeId, currentUser.Id);

            var outputModel = new LikeOutputModel()
            {
                IsLiked = this.likeService.IsLiked(recipeId, currentUser.Id),
                LikesCount = allLikes,
            };

            return this.Ok(outputModel);
        }

    }
}
