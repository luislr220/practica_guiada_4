import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";

function Home() {
  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Bienvenidos a Nuestra Aplicación</h1>
      <div style={contentStyle}>
        <p>Esta es una aplicación moderna desarrollada con React y Docker.</p>
        <div style={featuresStyle}>
          <div style={featureCardStyle}>
            <h3>React Router</h3>
            <p>Navegación fluida entre páginas</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Docker</h3>
            <p>Despliegue consistente y seguro</p>
          </div>
          <div style={featureCardStyle}>
            <h3>Workflow</h3>
            <p>Proceso de desarrollo optimizado</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>Acerca de Nosotros</h2>
      <div style={contentStyle}>
        <p>
          Somos un equipo apasionado por el desarrollo web y las tecnologías
          modernas.
        </p>
        <div style={aboutContentStyle}>
          <div style={aboutSectionStyle}>
            <h3>Nuestra Misión</h3>
            <p>
              Crear aplicaciones web innovadoras y de alta calidad utilizando
              las mejores prácticas y tecnologías actuales.
            </p>
          </div>
          <div style={aboutSectionStyle}>
            <h3>Tecnologías</h3>
            <ul style={listStyle}>
              <li>React.js</li>
              <li>Docker</li>
              <li>GitHub Actions</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Estilos compartidos
const pageStyle = {
  padding: "20px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const titleStyle = {
  color: "#333",
  borderBottom: "2px solid #f13710",
  paddingBottom: "10px",
  marginBottom: "20px",
};

const contentStyle = {
  lineHeight: "1.6",
  color: "#444",
};

const featuresStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const featureCardStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const aboutContentStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
  marginTop: "20px",
};

const aboutSectionStyle = {
  backgroundColor: "#f9f9f9",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

function App() {
  return (
    <BrowserRouter basename="/practica_guiada_4">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
