using Shop.Model.Models;
using Shop.Service;
using System;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shop.Web.Infrastructure.Core
{
    public class ApiControllerBase : ApiController
    {
        private IErrorService _errorService;
        public ApiControllerBase(IErrorService errorService)
        {
            _errorService = errorService;
        }
        protected HttpResponseMessage CreateHttpResponse(HttpRequestMessage requestMessage, Func<HttpResponseMessage> func)
        {
            HttpResponseMessage respone = null;
            try
            {
                return func.Invoke();
            }
            catch(DbEntityValidationException ex)
            {
                foreach(var i in ex.EntityValidationErrors)
                {
                    Trace.WriteLine($"Entity of type |{i.Entry.Entity.GetType().Name}| in state |{i.Entry.State }| has the following validation errors:");
                    foreach(var n in i.ValidationErrors)
                    {
                        Trace.WriteLine($"-Property: |{n.PropertyName}|, Error: |{n.ErrorMessage}|");
                    }
                }
                LogError(ex);
                respone = requestMessage.CreateResponse(HttpStatusCode.BadRequest, ex.InnerException.Message);
            }
            catch(DbUpdateException ex)
            {
                LogError(ex);
                respone = requestMessage.CreateResponse(HttpStatusCode.BadRequest, ex.InnerException.Message);
            }
            catch(Exception ex)
            {
                LogError(ex);
                respone = requestMessage.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
            return respone;
        }
        private void LogError(Exception ex)
        {
            try
            {
                Error error = new Error();
                error.Message = ex.Message;
                error.StackTrace = ex.StackTrace;
                error.CreatedDate = DateTime.Now;
                _errorService.Add(error);
                _errorService.SaveChanges();
            }
            catch
            {

            }
        }
    }
}