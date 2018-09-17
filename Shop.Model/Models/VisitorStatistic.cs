namespace Shop.Model.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class VisitorStatistic
    {
        public int ID { get; set; }

        public DateTime? VisitDated { get; set; }

        [StringLength(50)]
        public string IPAddress { get; set; }
    }
}
