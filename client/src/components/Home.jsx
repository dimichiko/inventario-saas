import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Sistema de Inventario SaaS</h1>
      <p className="text-xl text-gray-600 mb-8">
        Una solución completa para gestionar el inventario de tu empresa
      </p>
      
      {isAuthenticated ? (
        <div className="space-y-4">
          <p className="text-lg">Ya has iniciado sesión.</p>
          <Link 
            to="/dashboard" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Ir al Dashboard
          </Link>
        </div>
      ) : (
        <div className="space-x-4">
          <Link 
            to="/login" 
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Iniciar Sesión
          </Link>
          <Link 
            to="/register" 
            className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Registrarse
          </Link>
        </div>
      )}
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Gestión de Productos</h2>
          <p className="text-gray-600">
            Administra fácilmente tus productos, categorías, precios y cantidades.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Multiempresa</h2>
          <p className="text-gray-600">
            Cada empresa tiene su propio espacio seguro y aislado para gestionar su inventario.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Análisis de Texto</h2>
          <p className="text-gray-600">
            Herramienta de análisis de texto para procesar documentos relacionados con tu inventario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;