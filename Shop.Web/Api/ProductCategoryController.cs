using Shop.Web.Infrastructure.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Shop.Service;
using Shop.Model.Models;
using Shop.Web.Models;
using AutoMapper;
using Shop.Web.Infrastructure.Extensions;
using System.Web.Script.Serialization;

namespace Shop.Web.Api
{
    [RoutePrefix("api/productcategory")]
    public class ProductCategoryController : ApiControllerBase
    {
        IProductCategoryService _productCategoryService;

        public ProductCategoryController(IErrorService errorService, IProductCategoryService productCategoryService) : base(errorService)
        {
            _productCategoryService = productCategoryService;
        }

        [Route("getall")]
        [HttpGet]
        public HttpResponseMessage Get(HttpRequestMessage request, int page,int pageSize, string keyword)
        {
            return CreateHttpResponse(request, () =>
            {
                int totalRow = 0;
                var lstResult = keyword != null ?_productCategoryService.GetAll(keyword): _productCategoryService.GetAll();
                totalRow = lstResult.Count();
                lstResult = lstResult.OrderByDescending(n=>n.CreatedDate).Skip((page-1) * pageSize).Take(pageSize);
                var lstResultVM = Mapper.Map<List<ProductCategoryViewModel>>(lstResult);
                PaginationSet<ProductCategoryViewModel> paginationSet = new PaginationSet<ProductCategoryViewModel>()
                {
                    Items = lstResultVM,
                    Page = page,
                    TotalCount = totalRow,
                    TotalPage = (int)Math.Ceiling((decimal)totalRow/pageSize)
                };
                HttpResponseMessage respone = request.CreateResponse(HttpStatusCode.OK, paginationSet);
                return respone;
            });
        }

        [Route("getallparent")]
        [HttpGet]
        public HttpResponseMessage GetAllParent(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                var lstResult = _productCategoryService.GetAll();

                var lstResultVM = Mapper.Map<List<ProductCategoryViewModel>>(lstResult);

                HttpResponseMessage respone = request.CreateResponse(HttpStatusCode.OK, lstResultVM);
                return respone;
            });
        }

        [Route("add")]
        [HttpPost]
        public HttpResponseMessage Post(HttpRequestMessage request, ProductCategoryViewModel productCategoryVM)
        {
            return CreateHttpResponse(request, () => {
                HttpResponseMessage respone = null;

                if (!ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var ProductCategory = new ProductCategory();
                    ProductCategory.UpdateProductCategory(productCategoryVM);
                    var objCommit = _productCategoryService.Add(ProductCategory);
                    _productCategoryService.SaveChanges();

                    respone = request.CreateResponse(HttpStatusCode.Created, objCommit);
                }
                return respone;
            });
        }

        [Route("edit")]
        [AllowAnonymous]
        [HttpPut]
        public HttpResponseMessage Update(HttpRequestMessage request, ProductCategoryViewModel productCategoryVM)
        {
            return CreateHttpResponse(request, () => {
                HttpResponseMessage respone = null;
                if (!ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    if(productCategoryVM.ID != 0)
                    {
                        var ProductCategory = _productCategoryService.GetById(productCategoryVM.ID);
                        ProductCategory.UpdateProductCategory(productCategoryVM);
                        _productCategoryService.Update(ProductCategory);
                        _productCategoryService.SaveChanges();

                        respone = request.CreateResponse(HttpStatusCode.OK);
                    }
                    else
                    {
                        var ProductCategory = new ProductCategory();
                        ProductCategory.UpdateProductCategory(productCategoryVM);
                        var objCommit = _productCategoryService.Add(ProductCategory);
                        _productCategoryService.SaveChanges();

                        respone = request.CreateResponse(HttpStatusCode.Created, objCommit);
                    }
                    
                }
                return respone;
            });
        }

        [Route("getbyid")]
        [HttpGet]
        public HttpResponseMessage GetById(HttpRequestMessage request, int id)
        {
            return CreateHttpResponse(request, () =>
            {
                var lstResult = _productCategoryService.GetById(id);

                var lstResultVM = Mapper.Map<ProductCategoryViewModel>(lstResult);

                HttpResponseMessage respone = request.CreateResponse(HttpStatusCode.OK, lstResultVM);
                return respone;
            });
        }

        [Route("delete")]
        [AllowAnonymous]
        [HttpDelete]
        public HttpResponseMessage Delete(HttpRequestMessage request, string lstDelete)
        {
            return CreateHttpResponse(request, () => {
                HttpResponseMessage respone = null;

                if (!ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var lstDel = new JavaScriptSerializer().Deserialize<int[]>(lstDelete);
                    _productCategoryService.Update(lstDel);
                    _productCategoryService.SaveChanges();

                    respone = request.CreateResponse(HttpStatusCode.OK);
                }
                return respone;
            });
        }
    }
}