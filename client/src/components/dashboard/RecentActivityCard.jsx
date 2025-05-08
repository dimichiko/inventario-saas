import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

function RecentActivityCard({ activities }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 bg-blue-50">
        <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
          <svg className="h-5 w-5 text-blue-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Actividad Reciente
        </h3>
      </div>
      <div className="bg-white px-4 py-5 sm:p-6">
        {activities.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {activities.slice(0, 5).map((activity) => (
              <li key={activity.id} className="py-3">
                <div className="flex space-x-3">
                  <div className={`flex-shrink-0 h-8 w-8 rounded-full ${activity.type === 'entrada' ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center`}>
                    {activity.type === 'entrada' ? (
                      <svg className="h-4 w-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-4 w-4 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">
                      <span className="font-medium">{activity.productName}</span>
                      <span className="text-gray-500"> - {activity.type === 'entrada' ? 'Entrada' : 'Salida'} de </span>
                      <span className="font-medium">{activity.quantity}</span>
                      <span className="text-gray-500"> unidades</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(activity.date), "d 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-4">
            <p className="text-gray-500">No hay actividad reciente</p>
          </div>
        )}
      </div>
      {activities.length > 5 && (
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <Link to="/inventory/movements" className="font-medium text-indigo-600 hover:text-indigo-500">
              Ver todo el historial
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default RecentActivityCard;