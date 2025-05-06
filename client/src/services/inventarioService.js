import api from '../api'

export const analizarTexto = async (texto) => {
  const res = await api.post('/analyze', { text: texto })
  return res.data
}