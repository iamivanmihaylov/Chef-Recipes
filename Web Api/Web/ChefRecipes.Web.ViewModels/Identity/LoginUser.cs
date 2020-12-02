using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ChefRecipes.Web.ViewModels.Identity
{
    public class LoginUser
    {

        [Required]
        public string Username { get; set; }


        [Required]
        public string Password { get; set; }

    }
}
