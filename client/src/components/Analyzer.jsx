import { useState, useContext } from 'react'
import api from '../api'
import { AuthContext } from '../context/AuthContext'

function Analyzer() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const { token } = useContext(AuthContext)

  // Configurar el token en las solicitudes API
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const response = await api.post('/analyze', { text: input })
      setResult(response.data)
    } catch (error) {
      console.error('Error analizando texto', error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Analizador de Texto</h1>
      
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="text-input">
          Escribe aquí el texto legal a analizar:
        </label>
        <textarea
          id="text-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={6}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Escribe aquí el texto legal a analizar..."
        />
      </div>
      
      <button 
        onClick={handleAnalyze} 
        disabled={loading || !input.trim()}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 disabled:opacity-50"
      >
        {loading ? 'Analizando...' : 'Analizar'}
      </button>

      {result && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Resultado del Análisis</h2>
          <p className="text-lg mb-4">{result.message}</p>
          
          {result.riesgos?.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-700">Riesgos Identificados:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {result.riesgos.map((riesgo, index) => (
                  <li key={index} className="text-yellow-700">⚠️ {riesgo}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Analyzer