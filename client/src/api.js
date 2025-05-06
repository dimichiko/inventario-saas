import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // usa tu variable de entorno
})

export default api