import { useEffect } from 'react'
import './App.css'
import FormularioClima from './components/FormularioClima'
import Titulo from './components/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'
import InfoClima from './components/InfoClima'

function App() {

  useEffect(()=> {
    obtenerCima()
  })

  const obtenerCima = async () => {
    {/*const respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&lang=es&appid=a18aaf89ecdc6baf3a70d28064366d5b');
    const datos = await respuesta.json()
    console.log(datos)*/}
  }
  return (
    <>
      <main className='container my-3'>
        <Titulo />
        <section className='container my-5'>
          <FormularioClima />
        </section>
        <section className='container d-flex justify-content-center'>
          <InfoClima />
        </section>
      </main>
    </>
  )
}

export default App
