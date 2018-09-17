using Shop.Data.Infrastructure;
using Shop.Data.Repositories;
using Shop.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shop.Service
{
    public interface IPostCategoryService
    {
        PostCategory Add(PostCategory postCategory);
        void Update(PostCategory postCategory);
        void Delete(PostCategory postCategory);
        void Delete(int id);
        IEnumerable<PostCategory> GetAll();
        IEnumerable<PostCategory> GetAllPaging(int page, int pageSize, out int total);
        PostCategory GetById(int id);
        IEnumerable<PostCategory> GetAllByTagPaging(string tag,int page, int pageSize, out int total);
        void SaveChanges();
    }
    public class PostCategoryService : IPostCategoryService
    {
        IPostCategoryRepository _postCategoryRepository;
        IUnitOfWork _unitOfWork;
        public PostCategoryService(IPostCategoryRepository postCategoryRepository, IUnitOfWork unitOfWork)
        {
            _postCategoryRepository = postCategoryRepository;
            _unitOfWork = unitOfWork;
        }

        public PostCategory Add(PostCategory postCategory)
        {
           return _postCategoryRepository.Add(postCategory);
        }

        public void Delete(PostCategory postCategory)
        {
            _postCategoryRepository.Delete(postCategory);
        }

        public void Delete(int id)
        {
            _postCategoryRepository.Delete(id);
        }

        public IEnumerable<PostCategory> GetAll()
        {
            return _postCategoryRepository.GetAll();
        }

        public IEnumerable<PostCategory> GetAllPaging(int page, int pageSize, out int total)
        {
            return _postCategoryRepository.GetMultiPaging(x => x.Status, out total, page, pageSize);
        }

        public IEnumerable<PostCategory> GetAllByTagPaging(string tag,int page, int pageSize, out int total)
        {
            return _postCategoryRepository.GetMultiPaging(tag,out total, page, pageSize);
        }

        public PostCategory GetById(int id)
        {
            return _postCategoryRepository.GetSingleById(id);
        }

        public void SaveChanges()
        {
            _unitOfWork.Commit();
        }

        public void Update(PostCategory postCategory)
        {
            _postCategoryRepository.Update(postCategory);
        }
    }
}
