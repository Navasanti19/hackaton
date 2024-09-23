import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavbarComponent from './components/NavBar/Navbar';
import ProgressBarComponent from './components/progressBar/progressBar';
import FormComponent from './components/Form/form';
import TimerComponent from './components/Timer/timer';
import PasswordGenerator from './components/pswGen/passwordGen';
import CharacterTable from './components/Table/table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <NavbarComponent inverted={false} />
    <NavbarComponent inverted={true} />
    <ProgressBarComponent />
    <FormComponent />
    <TimerComponent />
    <PasswordGenerator />
    <CharacterTable />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
