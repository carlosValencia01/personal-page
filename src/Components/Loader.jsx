// Loader.jsx
import './Loader.css'; // Importamos los estilos

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
      <p className="loader-text">Cargando...</p>
    </div>
  );
};

export default Loader;
