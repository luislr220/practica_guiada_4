import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <header style={{
        padding: "1rem",
        backgroundColor: "#f13710",
        color: "#fff",
        boxShadow: "0 2px 4px rgba(41, 42, 104, 0.1)"
      }}>
        <nav style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            Mi App
          </div>
          <div>
            <Link to="/" style={navLinkStyle}>Home</Link>
            <Link to="/about" style={navLinkStyle}>Acerca de</Link>
            <Link to="/about" style={navLinkStyle}>Luis Armando</Link>
          </div>
        </nav>
      </header>

      <main style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        flex: 1
      }}>
        <Outlet />
      </main>

      <footer style={{
        padding: "1rem",
        backgroundColor: "#f13710",
        color: "#fff",
        textAlign: "center",
        marginTop: "auto"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <p style={{ margin: 0 }}>Derechos Reservados© 2025</p>
        </div>
      </footer>
    </div>
  );
};

// Estilos para los enlaces de navegación
const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  marginLeft: "1rem",
  borderRadius: "4px",
  transition: "background-color 0.3s",
  ':hover': {
    backgroundColor: "rgba(255,255,255,0.1)"
  }
};

export default Layout;