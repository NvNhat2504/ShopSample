using Shop.Data.Infrastructure;
using Shop.Model.Models;

namespace Shop.Data.Repositories
{
    public interface IPaymentMethodRepository : IRepository<PaymentMethod>
    {

    }
    public class PaymentMethodRepository : RepositoryBase<PaymentMethod>,IPaymentMethodRepository
    {
        public PaymentMethodRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}
