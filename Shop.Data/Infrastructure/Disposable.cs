using System;

namespace Shop.Data.Infrastructure
{
    public class Disposable : IDisposable
    {
        private bool isDisposed;
        ~Disposable()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool Disposing)
        {
            if(!isDisposed && Disposing)
            {
                DisposeCore();
            }
            isDisposed = true;
        }
        protected virtual void DisposeCore()
        {

        }
    }
}
