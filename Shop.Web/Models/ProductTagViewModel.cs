using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class ProductTagViewModel
    {
        public int ProductID { get; set; }

        public int TagID { get; set; }

        public DateTime? CreatedDate { get; set; }

        public virtual ProductViewModel Product { get; set; }

        public virtual TagViewModel Tag { get; set; }
    }
}