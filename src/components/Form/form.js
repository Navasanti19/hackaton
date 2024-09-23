import React, { useState } from 'react';
import './form.css';

const FormComponent = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    age: ''
  });

  // Estado para manejar el envío de datos
  const [submittedData, setSubmittedData] = useState(null);

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convertir a mayúsculas los campos
    const dataToSubmit = {
      username: formData.username.toUpperCase(),
      fullname: formData.fullname.toUpperCase(),
      age: formData.age
    };

    // Mostrar un alert con el JSON de los datos
    alert(JSON.stringify(dataToSubmit));

    setSubmittedData(dataToSubmit);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="fullname">FullName:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Request Sent to DB with below request data</h3>
          <ul>
            <li>UserName: {submittedData.username}</li>
            <li>FullName: {submittedData.fullname}</li>
            <li>Age: {submittedData.age}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
