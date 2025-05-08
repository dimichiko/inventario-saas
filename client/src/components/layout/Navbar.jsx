import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold">Inventario SaaS</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 transition duration-150">
                    Dashboard
                  </Link>
                  <Link to="/products" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 transition duration-150">
                    Productos
                  </Link>
                  <Link to="/analyze" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-indigo-700 transition duration-150">
                    Análisis
                  </Link>
                  <div className="ml-3 relative">
                    <div className="flex items-center">
                      <span className="text-white text-sm mr-4">Hola, {user?.name || 'Usuario'}</span>
                      <button
                        onClick={logout}
                        className="ml-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 rounded-md transition duration-150">
                    Iniciar Sesión
                  </Link>
                  <Link to="/register" className="ml-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150">
                    Registrarse
                  </Link>
                </>
              )}
            </div>
            
            {/* Menú móvil */}
            <div className="md:hidden flex items-center">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <Link to="/dashboard" className="px-2 py-1 text-xs text-white hover:bg-indigo-700 rounded transition duration-150">
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="px-2 py-1 border border-transparent rounded shadow-sm text-xs font-medium text-white bg-red-600 hover:bg-red-700 transition duration-150"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link to="/login" className="px-2 py-1 text-xs text-white hover:bg-indigo-700 rounded transition duration-150">
                    Login
                  </Link>
                  <Link to="/register" className="px-2 py-1 border border-transparent rounded shadow-sm text-xs font-medium text-white bg-green-600 hover:bg-green-700 transition duration-150">
                    Registro
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;