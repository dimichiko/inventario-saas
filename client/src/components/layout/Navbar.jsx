import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-white">
        
        <Link to="/" className="text-2xl font-bold hover:underline">
          Inventario SaaS
        </Link>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 text-sm font-medium">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
              <Link to="/products" className="hover:text-gray-300 transition">Productos</Link>
              <Link to="/analyze" className="hover:text-gray-300 transition">Análisis</Link>
              <span className="md:ml-4">Hola, {user?.name || 'Usuario'}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white transition"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300 transition">Iniciar sesión</Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white transition"
              >
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;