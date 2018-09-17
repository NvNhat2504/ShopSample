using Shop.Model.Models;
using Shop.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Infrastructure.Extensions
{
    public static class EntityExtensions
    {
        public static void UpdatePostCategory(this PostCategory postCategory, PostCategoryViewModel postCategoryVM)
        {
            postCategory.ID = postCategoryVM.ID;
            postCategory.Name = postCategoryVM.Name;
            postCategory.Alias = postCategoryVM.Alias;
            postCategory.ParentID = postCategoryVM.ParentID;
            postCategory.DisplayOrder = postCategoryVM.DisplayOrder;
            postCategory.Image = postCategoryVM.Image;
            postCategory.Description = postCategoryVM.Description;
            postCategory.MetaKeyword = postCategoryVM.MetaKeyword;
            postCategory.MetaDescription = postCategoryVM.MetaDescription;
            postCategory.CreatedDate = postCategoryVM.CreatedDate;
            postCategory.CreatedBy = postCategoryVM.CreatedBy;
            postCategory.UpdatedDate = postCategoryVM.UpdatedDate;
            postCategory.UpdatedBy = postCategoryVM.UpdatedBy;
            postCategory.Status = postCategoryVM.Status;
            postCategory.HomeFlag = postCategoryVM.HomeFlag;
        }
        public static void UpdateProductCategory(this ProductCategory productCategory, ProductCategoryViewModel productCategoryVM)
        {
            productCategory.ID = productCategoryVM.ID;
            productCategory.Name = productCategoryVM.Name;
            productCategory.Alias = productCategoryVM.Alias;
            productCategory.ParentID = productCategoryVM.ParentID;
            productCategory.DisplayOrder = productCategoryVM.DisplayOrder;
            productCategory.Image = productCategoryVM.Image;
            productCategory.Description = productCategoryVM.Description;
            productCategory.MetaKeyword = productCategoryVM.MetaKeyword;
            productCategory.MetaDescription = productCategoryVM.MetaDescription;
            productCategory.CreatedDate = productCategoryVM.CreatedDate;
            productCategory.CreatedBy = productCategoryVM.CreatedBy;
            productCategory.UpdatedDate = productCategoryVM.UpdatedDate;
            productCategory.UpdatedBy = productCategoryVM.UpdatedBy;
            productCategory.Status = productCategoryVM.Status;
            productCategory.HomeFlag = productCategoryVM.HomeFlag;
        }


        public static void UpdatePost(this Post post, PostViewModel postVM)
        {
            post.ID = postVM.ID;
            post.Name = postVM.Name;
            post.Alias = postVM.Alias;
            post.CategoryID = postVM.CategoryID;
            post.Image = postVM.Image;
            post.Description = postVM.Description;
            post.Content = postVM.Content;
            post.MetaKeyword = postVM.MetaKeyword;
            post.MetaDescription = postVM.MetaDescription;
            post.CreatedDate = postVM.CreatedDate;
            post.CreatedBy = postVM.CreatedBy;
            post.UpdatedDate = postVM.UpdatedDate;
            post.UpdatedBy = postVM.UpdatedBy;
            post.Status = postVM.Status;
            post.HomeFlag = postVM.HomeFlag;
            post.HotFlag = postVM.HotFlag;
            post.ViewCount = postVM.ViewCount;
        }
    }
}