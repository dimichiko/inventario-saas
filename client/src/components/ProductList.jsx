import { useEffect, useState } from 'react'
import api from '../api'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await api.get('/api/products')
      setProducts(res.data)
    } catch (err) {
      console.error('Error al obtener productos:', err)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Listado de Productos</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>${p.price}</td>
                <td>{p.category}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5">No hay productos</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList