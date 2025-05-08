import { useState } from 'react'
import api from '../api'

function ProductForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    price: '',
    category: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const { data } = await api.post('/api/products', form)
      onAdd(data)
      setForm({ name: '', quantity: '', price: '', category: '' })
    } catch (err) {
      console.error('Error agregando producto', err)
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" required />
      <input name="quantity" type="number" value={form.quantity} onChange={handleChange} placeholder="Cantidad" required />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Precio" required />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" />
      <button type="submit">Agregar Producto</button>
    </form>
  )
}

export default ProductForm