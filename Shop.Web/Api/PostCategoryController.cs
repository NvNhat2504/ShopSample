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

namespace Shop.Web.Api
{
    [RoutePrefix("api/postcategory")]
    public class PostCategoryController : ApiControllerBase
    {
        IPostCategoryService _postCategoryService;
        
        public PostCategoryController(IErrorService errorService, IPostCategoryService postCategoryService) : base(errorService)
        {
            _postCategoryService = postCategoryService; 
        }

        [Route("getall")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                var lstResult = _postCategoryService.GetAll();
                var lstResultVM = Mapper.Map<List<PostCategoryViewModel>>(lstResult);

                HttpResponseMessage respone = request.CreateResponse(HttpStatusCode.OK, lstResultVM);
                return respone;
            });
        }

        [Route("add")]
        public HttpResponseMessage Post(HttpRequestMessage request, PostCategoryViewModel postCategoryVM)
        {
            return CreateHttpResponse(request,()=> {
                HttpResponseMessage respone = null;

                if(ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var postCategory = new PostCategory();
                    postCategory.UpdatePostCategory(postCategoryVM);
                    var objCommit = _postCategoryService.Add(postCategory);
                    _postCategoryService.SaveChanges();

                    respone = request.CreateResponse(HttpStatusCode.Created, objCommit);
                }
                return respone;
            });
        }
        [Route("update")]
        public HttpResponseMessage Put(HttpRequestMessage request, PostCategoryViewModel postCategoryVM)
        {
            return CreateHttpResponse(request, () => {
                HttpResponseMessage respone = null;

                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    var postCategory = _postCategoryService.GetById(postCategoryVM.ID);
                    postCategory.UpdatePostCategory(postCategoryVM);
                    _postCategoryService.Update(postCategory);
                    _postCategoryService.SaveChanges();

                    respone = request.CreateResponse(HttpStatusCode.OK);
                }
                return respone;
            });
        }

        public HttpResponseMessage Delete(HttpRequestMessage request, int idPostCategory)
        {
            return CreateHttpResponse(request, () => {
                HttpResponseMessage respone = null;

                if (ModelState.IsValid)
                {
                    request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
                }
                else
                {
                    _postCategoryService.Delete(idPostCategory);
                    _postCategoryService.SaveChanges();

                    respone = request.CreateResponse(HttpStatusCode.OK);
                }
                return respone;
            });
        }
    }
}