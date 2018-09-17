using Shop.Data.Infrastructure;
using Shop.Model.Models;
using System.Collections.Generic;
using System.Linq;

namespace Shop.Data.Repositories
{
    public interface IProductCategoryRepository : IRepository<ProductCategory>
    {
        IEnumerable<ProductCategory> GetByAlias(string Alias);
        IEnumerable<ProductCategory> GetMultiPaging(string Tag, out int total, int index = 0, int size = 50, string[] includes = null);
        void Update(int[] lstID);
    }
    public class ProductCategoryRepository : RepositoryBase<ProductCategory>, IProductCategoryRepository
    {
        public ProductCategoryRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        public IEnumerable<ProductCategory> GetByAlias(string Alias)
        {
            return DbContext.ProductCategories.Where(x=>x.Alias == Alias);
        }

        public void Update(int[] lstID)
        {
            foreach(var i in lstID)
            {
                DbContext.ProductCategories.FirstOrDefault(x => x.ID == i).IsDelete = true;
            }
        }

        IEnumerable<ProductCategory> IProductCategoryRepository.GetMultiPaging(string Tag, out int total, int index, int size, string[] includes)
        {
            int skipCount = index * size;
            IEnumerable<ProductCategory> _lstResult = DbContext.ProductCategories.Where(x => x.Status && DbContext.PostTags.Find(x.ID).Tag.Name == Tag);

            _lstResult = skipCount == 0 ? _lstResult.Take(size) : _lstResult.Skip(skipCount).Take(size);
            total = _lstResult.Count();
            return _lstResult;
        }
    }
}
