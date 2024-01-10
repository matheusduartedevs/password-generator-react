import { FaClipboard } from 'react-icons/fa'
import { useForm } from './hooks/useForm'
import { useState } from 'react'
import { getRandomChar, getSpecialChar } from './utils'
import toast from 'react-hot-toast'

const App = () => {
  const [result, setResult] = useState('')

  const [values, setValues] = useForm({
    length: 6,
    capital: true,
    small: true,
    number: false,
    symbol: false
  })

  const fieldsArray = [
    {
      field: values.capital,
      getChar: () => getRandomChar(65, 90),
    },
    {
      field: values.small,
      getChar: () => getRandomChar(97, 122),
    },
    {
      field: values.number,
      getChar: () => getRandomChar(48, 57),
    },
    {
      field: values.symbol,
      getChar: () => getSpecialChar(),
    },
  ]

  const handleOnSubmit = (e) => {
    e.preventDefault()
    let generatedPassword = ''
    const checkedFields = fieldsArray.filter(({ field }) => field)

    for (let i = 0; i < values.length; i++) {
      const index = Math.floor(Math.random() * checkedFields.length)
      const letter = checkedFields[index]?.getChar()

      if (letter) {
        generatedPassword += letter
      }
    }
    if (generatedPassword) {
      setResult(generatedPassword)
    } else {
      toast.error('Selecione pelo menos uma opção de senha!')
    }
  }

  const handleClipboard = async () => {
    if (result) {
      await navigator.clipboard.writeText(result)
      toast.success('Senha copiada!')
    } else {
      toast.error('Gere uma senha para ser copiada!')
    }
  }

  return (
    <section>
      <div className="container">
        <form id="pg-form" onSubmit={handleOnSubmit}>
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Caracteres" readOnly value={result} />
            <div className="clipboard">
              <FaClipboard onClick={handleClipboard} />
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