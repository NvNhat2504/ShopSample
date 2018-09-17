using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class ProductViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Alias { get; set; }

        public int CategoryID { get; set; }

        public decimal Price { get; set; }

        public decimal? Promotion { get; set; }

        public int? Warranty { get; set; }

        public string Image { get; set; }

        public string MoreImage { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }

        public string MetaKeyword { get; set; }

        public string MetaDescription { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public int? UpdatedBy { get; set; }

        public bool Status { get; set; }

        public bool? HomeFlag { get; set; }

        public bool? HotFlag { get; set; }

        public int? ViewCount { get; set; }

        public virtual ICollection<OrderDetailViewModel> OrderDetails { get; set; }

        public virtual ProductCategoryViewModel ProductCategory { get; set; }

        public virtual ICollection<ProductTagViewModel> ProductTags { get; set; }
    }
}