namespace Shop.Model.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class SupportOnline
    {
        public int ID { get; set; }

        [StringLength(250)]
        public string Name { get; set; }

        [StringLength(250)]
        public string Deparment { get; set; }

        [StringLength(250)]
        public string Skype { get; set; }

        [StringLength(250)]
        public string Mobile { get; set; }

        [StringLength(250)]
        public string Email { get; set; }

        [StringLength(250)]
        public string Yahoo { get; set; }

        [StringLength(250)]
        public string Facebook { get; set; }

        public bool? Status { get; set; }
    }
}
