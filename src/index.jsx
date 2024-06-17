import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Uno from './Comp1.jsx';
import Uno2 from './Comp2.jsx';
import Lateral from './Side';
import Nista from './ListaVariable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/NuestrosProductos" element={<Uno />} />
        <Route path="/AcercaDeNosotros" element={<Uno2 />} />
      </Routes>
    </Router>
    
    
  </React.StrictMode>
);
/*
<Lateral src = "Octocat.png"></Lateral>
    <Lateral src = "pan1.jpg"></Lateral>
    <Uno lorem = "a" ipsum = "b"></Uno>
    <Uno2></Uno2>
    <Nista p1 = "Programacion II" p2 = "Programacion web II" p3 = "Programacion III"></Nista>
    <Nista p1 = "Bolivar" p2 = "San Jose" p3 = "Strongest"></Nista>
    <App />
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
