import { useState } from 'react'
import api from '../api'

function Analyzer() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)

  const handleAnalyze = async () => {
    try {
      const response = await api.post('/analyze', { text: input })
      setResult(response.data)
    } catch (error) {
      console.error('Error analizando texto', error)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={6}
        cols={60}
        placeholder="Escribe aquí el texto legal a analizar..."
      />
      <br />
      <button onClick={handleAnalyze} style={{ marginTop: '0.5rem' }}>
        Analizar
      </button>

      {result && (
        <div style={{ marginTop: '1rem' }}>
          <strong>{result.message}</strong>
          {result.riesgos?.length > 0 && (
            <ul>
              {result.riesgos.map((riesgo, index) => (
                <li key={index}>⚠️ {riesgo}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default Analyzer