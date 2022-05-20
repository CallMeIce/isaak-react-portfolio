import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>,
  );