import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '.';
import About from './About';
import GiftCard from './GiftCard';
import Promotions from './Promotions';
import Nails from './Nails';
import Eyelash_Waxing from './Eyelash-Waxing';
import FAQ from './FAQ';
import Contact from './Contact';
import "./assets/css/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/services/nails" element={<Nails />} />
        <Route path="/services/eyelash-waxing" element={<Eyelash_Waxing />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
