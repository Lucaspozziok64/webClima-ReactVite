const InfoClima = () => {
  return (
    <div className="card w-50 my-3">
      <h5 className="card-header text-center bg-secondary">Clima en Pais y ciudad</h5>
      <div className="card-body text-center bg-danger-subtle">
        <h6 className="card-text">Breve descripcion del dia</h6>
        <p className="card-title">🌡️Temperatura: 13.68 °C</p>
        <p className="card-text">📉 Mín: 13.68 °C | 📈 Máx: 13.68 °C</p>
        <p className="card-text">💧 Humedad: 30%</p>
        <p className="card-text">🌤️ Condición: cielo claro</p>
        <p className="card-text">💨 Viento: 2.07 m/s</p>
      </div>
    </div>
  );
};

export default InfoClima;
