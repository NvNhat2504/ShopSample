using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class OrderDetailViewModel
    {
        public int ID { get; set; }

        public int OrderID { get; set; }

        public int ProductID { get; set; }

        public int? Quantity { get; set; }

        public DateTime? CreatedDate { get; set; }

        public bool Status { get; set; }

        public virtual OrderViewModel Order { get; set; }

        public virtual ProductViewModel Product { get; set; }
    }
}