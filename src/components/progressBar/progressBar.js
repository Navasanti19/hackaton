import React, { useState } from 'react';
import './ProgressBarComponent.css';

const ProgressBarComponent = () => {
  // Estado para almacenar el valor del porcentaje
  const [percentage, setPercentage] = useState(0);

  // Función para manejar los cambios en el input
  const handleInputChange = (e) => {
    const value = Math.max(0, Math.min(100, e.target.value)); // Limita entre 0 y 100
    setPercentage(value);
  };

  return (
    <div className="progress-bar-container">
      <h2>Progress bar</h2>
      
      {/* Barra de progreso */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}>
          <span className="progress-text">{percentage}%</span>
        </div>
      </div>
      
      {/* Input para cambiar el porcentaje */}
      <div className="input-container">
        <label htmlFor="percentage-input">Input Percentage:</label>
        <input 
          id="percentage-input"
          type="number"
          value={percentage}
          onChange={handleInputChange}
          className="percentage-input"
        />
      </div>
    </div>
  );
};

export default ProgressBarComponent;
