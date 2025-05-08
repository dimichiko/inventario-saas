// ProductList.jsx
import { useState } from 'react'
import api from '../api'

function ProductList({ products, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(null)
  const [editForm, setEditForm] = useState({})

  const startEdit = (product) => {
    setEditing(product._id)
    setEditForm(product)
  }

  const handleEditChange = e => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value })
  }

  const submitEdit = async (id) => {
    try {
      const { data } = await api.put(`/api/products/${id}`, editForm)
      onUpdate(data)
      setEditing(null)
    } catch (err) {
      console.error('Error actualizando producto', err)
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
                {editing === p._id ? (
                  <>
                    <td><input name="name" value={editForm.name} onChange={handleEditChange} /></td>
                    <td><input name="quantity" type="number" value={editForm.quantity} onChange={handleEditChange} /></td>
                    <td><input name="price" type="number" value={editForm.price} onChange={handleEditChange} /></td>
                    <td><input name="category" value={editForm.category} onChange={handleEditChange} /></td>
                    <td>
                      <button onClick={() => submitEdit(p._id)}>Guardar</button>
                      <button onClick={() => setEditing(null)}>Cancelar</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{p.name}</td>
                    <td>{p.quantity}</td>
                    <td>${p.price}</td>
                    <td>{p.category}</td>
                    <td>
                      <button onClick={() => startEdit(p)}>Editar</button>
                      <button onClick={() => onDelete(p._id)}>Eliminar</button>
                    </td>
                  </>
                )}
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