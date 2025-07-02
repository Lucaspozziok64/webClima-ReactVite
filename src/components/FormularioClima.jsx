const FormularioClima = ({
  setClimaPais,
  setClimaCiudad,
  climaPais,
  climaCiudad,
  setMostrarSpinner,
  obtenerCima
}) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la página
    obtenerCima(); // Llama a la función que hace la petición
    setMostrarSpinner(true)
  };  

  return (
    <form onSubmit={handleSubmit} className="container w-75 d-flex flex-column formulario">
      <div className="d-flex justify-content-center mb-4">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Consultar Pais:</strong>
        </label>
        <input
          className="w-25 mx-4"
          placeholder="Argentina"
          onChange={(e)=> {setClimaPais(e.target.value)}}
          value={climaPais}
          required
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Consultar Ciudad:</strong>
        </label>
        <input
          className="form-input w-25 mx-4"
          placeholder="Tucuman"
          onChange={(e)=> {setClimaCiudad(e.target.value)}}
          value={climaCiudad}
          required
        ></input>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end my-2">
        <button className="botonConsultar">Consultar</button>
      </div>
    </form>
  );
};

export default FormularioClima;
