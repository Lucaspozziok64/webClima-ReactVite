import { useEffect, useState } from "react";
import "./App.css";
import FormularioClima from "./components/FormularioClima";
import Titulo from "./components/Titulo";
import "bootstrap/dist/css/bootstrap.min.css";
import InfoClima from "./components/InfoClima";
import { Spinner } from "react-bootstrap";

function App() {
  const [climaPais, setClimaPais] = useState("");
  const [climaCiudad, setClimaCiudad] = useState("");
  const [climas, setClimas] = useState(null);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);

  const obtenerCima = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${climaCiudad},${climaPais}&lang=es&units=metric&appid=a18aaf89ecdc6baf3a70d28064366d5b`
      );
      const datos = await respuesta.json();

      if (datos.cod === 200) {
        const climaFormateado = {
          descripcion: datos.weather[0].description,
          temperatura: datos.main.temp,
          tempMin: datos.main.temp_min,
          tempMax: datos.main.temp_max,
          humedad: datos.main.humidity,
          condicion: datos.weather[0].main,
          viento: datos.wind.speed,
          ciudad: datos.name,
          pais: datos.sys.country,
        };
        setClimas(climaFormateado);
        setMostrarSpinner(false);
      } else {
        alert("Pais o ciudad no reconocido");
      }
    } catch (error) {
      console.log("Error al obtener el clima:", error);
    } finally {
      setMostrarSpinner(false); // Ocultar spinner
    }
  };

  return (
    <>
      <header className="bg-black">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <p className="navbar-brand text-white mb-0" href="#">
                ClimaApp⛅🌩️🌪️☃️🌡️
              </p>
            </div>
          </nav>
        </div>
      </header>
      <main className="container my-3">
        <Titulo />
        <section className="container my-5">
          <FormularioClima
            setClimaCiudad={setClimaCiudad}
            setClimaPais={setClimaPais}
            climaCiudad={climaCiudad}
            climaPais={climaPais}
            setMostrarSpinner={setMostrarSpinner}
            obtenerCima={obtenerCima}
          />
        </section>
        {mostrarSpinner ? (
          <div className="my-3 d-flex justify-content-center">
            <Spinner animation="grow" variant="ligth" />
          </div>
        ) : (
          <section className="container d-flex justify-content-center">
            {climas && <InfoClima clima={climas} />}
          </section>
        )}
      </main>
      <footer className="bg-dark text-center text-white p-1">
        <p className="mb-0">&copy;Todos los derechos reservados</p>
        <p className="mb-0">
          Desarrollado por <a href="http://">Lucas Figueroa</a>
        </p>
      </footer>
    </>
  );
}

export default App;
