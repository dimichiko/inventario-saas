import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          Inventario SaaS
        </Link>
        
        <div className="flex items-center">
          {isAuthenticated ? (
            <>
              <span className="text-gray-300 mr-4">
                Hola, {user?.name} | {user?.companySlug}
              </span>
              <Link to="/dashboard" className="text-gray-300 hover:text-white mr-4">
                Dashboard
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white mr-4">
                Productos
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white mr-4">
                Iniciar Sesión
              </Link>
              <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;