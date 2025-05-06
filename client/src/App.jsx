import Analyzer from "./components/Analyzer"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import { useState, useEffect } from "react"
import api from "./api"

function App() {
  const [products, setProducts] = useState([])
  const [editingProduct, setEditingProduct] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await api.get('/api/products')
    setProducts(res.data)
  }

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const handleDelete = async (id) => {
    await api.delete(`/api/products/${id}`)
    setProducts(products.filter(p => p._id !== id))
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
  }

  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(p => p._id === updatedProduct._id ? updatedProduct : p))
    setEditingProduct(null)
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Inventario SaaS</h1>

      {/* Análisis (puedes quitarlo luego si quieres separar) */}
      <Analyzer />

      {/* Formulario de producto */}
      <ProductForm
        onAdd={handleAdd}
        editingProduct={editingProduct}
        onUpdate={handleUpdate}
      />

      {/* Lista de productos */}
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  )
}

export default App