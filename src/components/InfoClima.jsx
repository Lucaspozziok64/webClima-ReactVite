const InfoClima = ({ clima }) => {
  return (
    <div className="card w-50 my-3">
      <h5 className="card-header text-center bg-secondary">Clima en {clima.pais}, {clima.ciudad}</h5>
      <div className="card-body text-center bg-danger-subtle">
        <h6 className="card-text">{clima.descripcion}</h6>
        <p className="card-title">🌡️Temperatura: {clima.temperatura}</p>
        <p className="card-text">📉 Mín: {clima.tempMin} °C | 📈 Máx: {clima.tempMax} °C</p>
        <p className="card-text">💧 Humedad: {clima.humedad}%</p>
        <p className="card-text">🌤️ Condición: {clima.condicion}</p>
        <p className="card-text">💨 Viento: {clima.viento} m/s</p>
      </div>
    </div>
  );
};

export default InfoClima;
