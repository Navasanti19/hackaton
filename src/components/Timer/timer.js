import React, { useState, useEffect } from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0); // Estado único que maneja los segundos
  const [isActive, setIsActive] = useState(false);

  // useEffect para manejar el temporizador
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Aumentamos el tiempo total en segundos
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  // Función para iniciar el temporizador
  const startTimer = () => {
    setIsActive(true);
  };

  // Función para detener el temporizador
  const stopTimer = () => {
    setIsActive(false);
  };

  // Función para reiniciar el temporizador
  const resetTimer = () => {
    setIsActive(false);
    setTime(0); // Reiniciar el tiempo total
  };

  // Derivar los minutos y segundos a partir del tiempo total en segundos
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Timer</h1>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        {minutes} mins {seconds} secs
      </div>
      <div>
        <button onClick={startTimer} style={styles.startButton}>Start</button>
        <button onClick={stopTimer} style={styles.stopButton}>Stop</button>
        <button onClick={resetTimer} style={styles.resetButton}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  startButton: {
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    marginRight: '10px',
    cursor: 'pointer'
  },
  stopButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    fontSize: '16px',
    marginRight: '10px',
    cursor: 'pointer'
  },
  resetButton: {
    backgroundColor: 'yellow',
    color: 'black',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default TimerComponent;
