using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Models
{
    public class TagViewModel
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public virtual ICollection<PostTagViewModel> PostTags { get; set; }

        public virtual ICollection<ProductTagViewModel> ProductTags { get; set; }
    }
}