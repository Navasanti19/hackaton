import React, { useState, useEffect } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  // Función para generar la contraseña
  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}<>?';
    
    let charset = '';
    if (includeUppercase) charset += uppercase;
    if (includeLowercase) charset += lowercase;
    if (includeNumbers) charset += numbers;
    if (includeSpecialChars) charset += specialChars;

    if (charset === '') return ''; // Si no se selecciona nada, no generamos contraseña

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    return generatedPassword;
  };

  // useEffect para generar la contraseña cuando cambien los parámetros
  useEffect(() => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div style={styles.container}>
      <h2>Password Generator</h2>
      <p>Create strong and secure passwords to keep your account safe online.</p>
      <div style={styles.passwordContainer}>
        <input type="text" value={password} readOnly style={styles.passwordInput} />
        <button onClick={copyToClipboard} style={styles.copyButton}>Copy</button>
      </div>

      <label>Password Length: {length}</label>
      <input
        type="range"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        style={styles.slider}
      />

      <div style={styles.options}>
        <div>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
          <label>Uppercase</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          />
          <label>Lowercase</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          <label>Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  passwordContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  passwordInput: {
    width: '70%',
    padding: '10px',
    fontSize: '16px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  copyButton: {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  slider: {
    width: '100%',
    margin: '20px 0',
  },
  options: {
    textAlign: 'left',
    marginBottom: '20px',
  },
};

export default PasswordGenerator;
