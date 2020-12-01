namespace ChefRecipes.Web.Areas.Administration.Controllers
{
    using ChefRecipes.Common;
    using ChefRecipes.Web.Controllers;

    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;

    [Authorize(Roles = GlobalConstants.AdministratorRoleName)]
    [Area("Administration")]
    public class AdministrationController : BaseController
    {
    }
}
