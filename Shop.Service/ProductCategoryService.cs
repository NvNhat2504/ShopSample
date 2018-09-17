using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shop.Data.Infrastructure;
using Shop.Data.Repositories;
using Shop.Model.Models;

namespace Shop.Service
{
    public interface IProductCategoryService
    {
        ProductCategory Add(ProductCategory ProductCategory);
        void Update(ProductCategory ProductCategory);
        void Delete(int[] lstIDProductCategory);
        void Update(int[] lstIDProductCategory);
        void Delete(int id);
        IEnumerable<ProductCategory> GetAll();
        IEnumerable<ProductCategory> GetAll(string keyword);
        IEnumerable<ProductCategory> GetAllPaging(int page, int pageSize, out int total);
        ProductCategory GetById(int id);
        IEnumerable<ProductCategory> GetAllByTagPaging(string tag, int page, int pageSize, out int total);
        void SaveChanges();
    }
    public class ProductCategoryService : IProductCategoryService
    {
        IProductCategoryRepository _productCategoryRepository;
        IUnitOfWork _unitOfWork;
        public ProductCategoryService(IProductCategoryRepository productCategoryRepository, IUnitOfWork unitOfWork)
        {
            _productCategoryRepository = productCategoryRepository;
            _unitOfWork = unitOfWork;
        }

        public ProductCategory Add(ProductCategory productCategory)
        {
            return _productCategoryRepository.Add(productCategory);
        }

        public void Delete(int[] lstIDProductCategory)
        {
            _productCategoryRepository.Delete(lstIDProductCategory);
        }
        public void Update(int[] lstIDProductCategory)
        {
            _productCategoryRepository.Update(lstIDProductCategory);
        }

        public void Delete(int id)
        {
            _productCategoryRepository.Delete(id);
        }

        public IEnumerable<ProductCategory> GetAll()
        {
            return _productCategoryRepository.GetMulti(x=>x.IsDelete.Value != true);
        }

        public IEnumerable<ProductCategory> GetAll(string keyword)
        {
            return _productCategoryRepository.GetMulti(i => i.IsDelete.Value != true && i.Name.ToUpper().Contains(keyword.ToUpper()) || i.Description.ToUpper().Contains(keyword.ToUpper()));
        }
        public IEnumerable<ProductCategory> GetAllPaging(int page, int pageSize, out int total)
        {
            return _productCategoryRepository.GetMultiPaging(x => x.Status, out total, page, pageSize);
        }

        public IEnumerable<ProductCategory> GetAllByTagPaging(string tag, int page, int pageSize, out int total)
        {
            return _productCategoryRepository.GetMultiPaging(tag, out total, page, pageSize);
        }

        public ProductCategory GetById(int id)
        {
            return _productCategoryRepository.GetSingleById(id);
        }

        public void SaveChanges()
        {
            _unitOfWork.Commit();
        }

        public void Update(ProductCategory productCategory)
        {
            _productCategoryRepository.Update(productCategory);
        }
    }
}
