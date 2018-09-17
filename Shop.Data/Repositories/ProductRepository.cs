using Shop.Data.Infrastructure;
using Shop.Model.Models;
using System.Collections.Generic;
using System.Linq;

namespace Shop.Data.Repositories
{
    public interface IProductRepository : IRepository<Product>
    {
        IEnumerable<Product> GetByAlias(string Alias);
    }
    public class ProductRepository : RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(IDbFactory dbFactory) : base(dbFactory)
        {

        }

        public IEnumerable<Product> GetByAlias(string Alias)
        {
            return DbContext.Products.Where(x => x.Alias == Alias);
        }
    }
}
