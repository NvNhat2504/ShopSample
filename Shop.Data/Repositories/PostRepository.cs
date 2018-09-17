using Shop.Data.Infrastructure;
using Shop.Model.Models;
using System.Collections.Generic;
using System;
using System.Linq;

namespace Shop.Data.Repositories
{
    public interface IPostRepository : IRepository<Post>
    {
        IEnumerable<Post> GetMultiPaging(string Tag, out int total, int index = 0, int size = 50, string[] includes = null);
    }
    public class PostRepository : RepositoryBase<Post>, IPostRepository
    {
        public PostRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        IEnumerable<Post> IPostRepository.GetMultiPaging(string Tag, out int total, int index, int size, string[] includes)
        {
            int skipCount = index * size;
            IEnumerable<Post> _lstResult = DbContext.Posts.Where(x=>x.Status && DbContext.PostTags.Find(x.ID).Tag.Name == Tag);

            _lstResult = skipCount == 0 ? _lstResult.Take(size) : _lstResult.Skip(skipCount).Take(size);
            total = _lstResult.Count();
            return _lstResult;
        }
    }
}
