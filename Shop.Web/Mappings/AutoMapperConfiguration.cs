using AutoMapper;
using Shop.Model.Models;
using Shop.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Shop.Web.Mappings
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Order, OrderViewModel>();
                cfg.CreateMap<OrderDetail, OrderDetailViewModel>();
                cfg.CreateMap<PaymentMethod, PaymentMethodViewModel>();
                cfg.CreateMap<PostCategory, PostCategoryViewModel>();
                cfg.CreateMap<PostTag, PostTagViewModel>();
                cfg.CreateMap<Post, PostViewModel>();
                cfg.CreateMap<Product, ProductViewModel>();
                cfg.CreateMap<ProductCategory, ProductCategoryViewModel>();
                cfg.CreateMap<ProductTag, ProductTagViewModel>();
                cfg.CreateMap<Tag, TagViewModel>();
            });
        }
    }
}