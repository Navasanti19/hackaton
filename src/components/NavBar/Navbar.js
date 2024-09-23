import React from 'react';
import './NavbarComponent.css'; // Importamos los estilos

const NavbarComponent = ({ inverted }) => {
  // Definimos los elementos del menú
  const menuItems = ['Home', 'Features', 'Pricing', 'About'];

  return (
    <nav className="navbar">
      {/* Si inverted es true, ponemos la barra de búsqueda primero */}
      {inverted ? (
        <>
          <div className="navbar-right">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
          </div>
          <div className="navbar-left">
            <ul className="navbar-menu">
              {menuItems.map((item, index) => (
                <li key={index} className="navbar-item">{item}</li>
              ))}
            </ul>
            <span className="navbar-logo">Navbar</span>
          </div>
        </>
      ) : (
        <>
          <div className="navbar-left">
            <span className="navbar-logo">Navbar</span>
            <ul className="navbar-menu">
              {menuItems.map((item, index) => (
                <li key={index} className="navbar-item">{item}</li>
              ))}
            </ul>
          </div>
          <div className="navbar-right">
            <input type="text" placeholder="Search" className="search-input" />
            <button className="search-button">Search</button>
          </div>
        </>
      )}
    </nav>
  );
};

export default NavbarComponent;
