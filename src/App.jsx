import { FaClipboard } from 'react-icons/fa'

const App = () => {
  return (
    <section>
      <div className="container">
        <form id="pg-form">
          <div className="result">
            <input type="text" id="result" placeholder="Min 6 Caracteres" readOnly />
            <div className="clipboard">
              <FaClipboard />
            </div>
          </div>
          <div>
            <div className="field">
              <label htmlFor="Length">Tamanho</label>
              <input type="number" id="Length" min={6} max={18} />
            </div>

            <div className="field">
              <label htmlFor="capital">Maiúscula</label>
              <input type="checkbox" id="capital" />
            </div>

            <div className="field">
              <label htmlFor="minuscula">Minúscula</label>
              <input type="checkbox" id="minuscula" />
            </div>

            <div className="field">
              <label htmlFor="numero">Número</label>
              <input type="checkbox" id="numero" />
            </div>

            <div className="field">
              <label htmlFor="simbolo">Símbolo</label>
              <input type="checkbox" id="simbolo" />
            </div>
          </div>
          <button type="submit">Gerar Senha</button>
        </form>
      </div>
    </section>
  )
}

export default App