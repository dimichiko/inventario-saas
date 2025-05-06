import express from 'express'
import Product from '../models/Product.js'

const router = express.Router()

// GET /api/products - obtener todos los productos
router.get('/', async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

// POST /api/products - crear producto nuevo
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body)
    const saved = await product.save()
    res.status(201).json(saved)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// GET /api/products/:id - obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' })
      }
      res.json(product)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  })
  
// PUT /api/products/:id - actualizar un producto
router.put('/:id', async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// DELETE /api/products/:id - eliminar un producto
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).end()
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

export default router