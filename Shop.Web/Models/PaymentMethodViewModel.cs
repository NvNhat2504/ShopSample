using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class PaymentMethodViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Status { get; set; }

        public virtual ICollection<OrderViewModel> Orders { get; set; }
    }
}