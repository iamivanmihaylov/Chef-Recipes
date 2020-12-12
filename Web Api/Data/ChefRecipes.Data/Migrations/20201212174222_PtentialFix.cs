using Microsoft.EntityFrameworkCore.Migrations;

namespace ChefRecipes.Data.Migrations
{
    public partial class PtentialFix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserUserName",
                table: "Recipes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserUserName",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
