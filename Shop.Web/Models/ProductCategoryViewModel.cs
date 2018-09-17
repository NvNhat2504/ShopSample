using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class ProductCategoryViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Alias { get; set; }

        public int? ParentID { get; set; }

        public int? DisplayOrder { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }

        public string MetaKeyword { get; set; }

        public string MetaDescription { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public DateTime? UpdatedDate { get; set; }

        public int? UpdatedBy { get; set; }

        public bool Status { get; set; }

        public bool? HomeFlag { get; set; }

        public virtual ICollection<ProductViewModel> Products { get; set; }
    }
}