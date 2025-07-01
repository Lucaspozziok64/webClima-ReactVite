import './App.css'
import FormularioClima from './components/FormularioClima'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <main className='container my-3'>
        <Titulo />
        <section className='container my-5'>
          <FormularioClima />
        </section>
      </main>
    </>
  )
}

export default App
