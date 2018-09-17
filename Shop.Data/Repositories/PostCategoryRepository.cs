using Shop.Data.Infrastructure;
using Shop.Model.Models;
using System.Collections.Generic;
using System.Linq;

namespace Shop.Data.Repositories
{
    public interface IPostCategoryRepository : IRepository<PostCategory>
    {
        IEnumerable<PostCategory> GetMultiPaging(string Tag, out int total, int index = 0, int size = 50, string[] includes = null);
    }
    public class PostCategoryRepository : RepositoryBase<PostCategory>, IPostCategoryRepository
    {
        public PostCategoryRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }
        IEnumerable<PostCategory> IPostCategoryRepository.GetMultiPaging(string Tag, out int total, int index, int size, string[] includes)
        {
            int skipCount = index * size;
            IEnumerable<PostCategory> _lstResult = DbContext.PostCategories.Where(x => x.Status && DbContext.PostTags.Find(x.ID).Tag.Name == Tag);

            _lstResult = skipCount == 0 ? _lstResult.Take(size) : _lstResult.Skip(skipCount).Take(size);
            total = _lstResult.Count();
            return _lstResult;
        }
    }
}
