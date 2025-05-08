import { Link } from 'react-router-dom';

function DashboardCard({ title, value, icon, linkTo, linkText, color = "bg-indigo-50" }) {
  return (
    <div className={`${color} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {title}
              </dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">
                  {value}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm">
          <Link to={linkTo} className="font-medium text-indigo-600 hover:text-indigo-500">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;