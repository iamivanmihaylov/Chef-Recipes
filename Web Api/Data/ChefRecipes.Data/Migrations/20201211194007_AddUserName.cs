using Microsoft.EntityFrameworkCore.Migrations;

namespace ChefRecipes.Data.Migrations
{
    public partial class AddUserName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserUserName",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Title",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "UserUserName",
                table: "Recipes");
        }
    }
}
