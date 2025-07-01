

const FormularioClima = () => {
    return (
      <form className="container d-flex flex-column formulario">
      <div className="d-flex justify-content-center mb-4">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Consultar Pais:</strong>
        </label>
        <input
          className="w-25 mx-4"
          placeholder="Argentina"
          required
        >
        </input>
      </div>
      <div className="d-flex justify-content-center">
        <label className="form-label" style={{ fontStyle: "italic" }}>
          <strong>Consultar Ciudad:</strong>
        </label>
        <input
          className="form-input w-25 mx-4"
          placeholder="Tucuman"
          required
        >
        </input>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end my-2">
        <button className="botonConsultar">Consultar</button>
      </div>
    </form>
    );
};

export default FormularioClima;