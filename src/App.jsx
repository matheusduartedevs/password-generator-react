import { FaClipboard } from 'react-icons/fa'
import { useForm } from './hooks/useForm'
import { useState } from 'react'

const App = () => {
  const [result, setResult] = useState('')

  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false
  })

  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Caracteres" readOnly value={result} />
            <div className="clipboard">
              <FaClipboard />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="Length">Tamanho</label>
              <input type="number" id="Length" min={6} max={18} name='length' value={values.length} onChange={setValues} />
            </div>

            <div className="field">
              <label htmlFor="capital">Maiúscula</label>
              <input type="checkbox" id="capital" name='capital' checked={values.capital} onChange={setValues} />
            </div>

            <div className="field">
              <label htmlFor="minuscula">Minúscula</label>
              <input type="checkbox" id="minuscula" name='small' checked={values.small} onChange={setValues} />
            </div>

            <div className="field">
              <label htmlFor="numero">Número</label>
              <input type="checkbox" id="numero" name='number' checked={values.number} onChange={setValues} />
            </div>

            <div className="field">
              <label htmlFor="simbolo">Símbolo</label>
              <input type="checkbox" id="simbolo" name='symbol' checked={values.symbol} onChange={setValues} />
            </div>
          </div>
          <button type="submit">Gerar Senha</button>
        </form>
      </div>
    </section>
  )
}

export default App