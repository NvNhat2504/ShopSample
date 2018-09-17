
namespace Shop.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        dbModels dbContext;
        public dbModels Init()
        {
            return dbContext ?? (dbContext = new dbModels());

        }
        protected override void DisposeCore()
        {
            if(dbContext != null)
            dbContext.Dispose();
        }
    }
}
