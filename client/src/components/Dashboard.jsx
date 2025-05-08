import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalProducts: 0,
    lowStock: 0,
    totalValue: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const products = await response.json();
        
        // Calcular estadísticas
        const totalProducts = products.length;
        const lowStock = products.filter(p => p.quantity < 10).length;
        const totalValue = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
        
        setStats({
          totalProducts,
          lowStock,
          totalValue
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener estadísticas:', error);
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  if (loading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Bienvenido, {user?.name}</h2>
        <p className="text-gray-600">Empresa: {user?.companySlug}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Total de Productos</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.totalProducts}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Productos con Stock Bajo</h3>
          <p className="text-3xl font-bold text-yellow-600">{stats.lowStock}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Valor Total del Inventario</h3>
          <p className="text-3xl font-bold text-green-600">${stats.totalValue.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Acciones Rápidas</h3>
          <div className="space-y-2">
            <Link 
              to="/products/new" 
              className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
            >
              Agregar Nuevo Producto
            </Link>
            <Link 
              to="/products" 
              className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-center"
            >
              Ver Todos los Productos
            </Link>
            <Link 
              to="/analyze" 
              className="block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-center"
            >
              Analizar Texto
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Información del Sistema</h3>
          <div className="space-y-2 text-gray-600">
            <p>Versión: 1.0.0</p>
            <p>Última actualización: {new Date().toLocaleDateString()}</p>
            <p>Estado: Activo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;