using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class OrderViewModel
    {
        public int ID { get; set; }

        public string CustomerName { get; set; }

        public string CustomerAddress { get; set; }

        public string CustomerEmail { get; set; }

        public string CustomerMobile { get; set; }

        public string CustomerMessage { get; set; }

        public DateTime? CreatedDate { get; set; }

        public int? CreatedBy { get; set; }

        public int? PaymentMethodID { get; set; }

        public bool? Status { get; set; }

        public virtual ICollection<OrderDetailViewModel> OrderDetails { get; set; }

        public virtual PaymentMethodViewModel PaymentMethod { get; set; }
    }
}