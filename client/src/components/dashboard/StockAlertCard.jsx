import { Link } from 'react-router-dom';

function StockAlertCard({ items }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-red-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
          <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Alertas de Stock Bajo
        </h3>
      </div>
      <div className="bg-white px-4 py-5 sm:p-6">
        {items.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {items.slice(0, 5).map((item) => (
              <li key={item.id} className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-red-800 font-medium text-xs">{item.quantity}</span>
                    </span>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/products/${item.id}`} className="text-sm text-indigo-600 hover:text-indigo-900">
                      Ver
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-4">
            <p className="text-gray-500">No hay productos con stock bajo</p>
          </div>
        )}
      </div>
      {items.length > 5 && (
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <Link to="/products?filter=low-stock" className="font-medium text-indigo-600 hover:text-indigo-500">
              Ver todas las alertas
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockAlertCard;