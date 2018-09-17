namespace Shop.Data.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Shop.Model.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Shop.Data.dbModels>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Shop.Data.dbModels context)
        {
            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new dbModels()));
            var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new dbModels()));

            var user = new ApplicationUser()
            {
                UserName = "Admin",
                Email = "NvNhat2504@gmail.com",
                EmailConfirmed = true,
                BirthDay = DateTime.Now,
                FullName = "Nguyễn Văn Nhất",
            };

            manager.Create(user,"123456@");
            if(!roleManager.Roles.Any())
            {
                roleManager.Create(new IdentityRole { Name = "Admin" });
                roleManager.Create(new IdentityRole { Name = "User" });
            }
            var adminUser = manager.FindByName("Admin");
            manager.AddToRoles(adminUser.Id, new string[] { "Admin", "User" });
        }
    }
}
