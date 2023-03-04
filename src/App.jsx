import React from "react";

// Components 
import Work from './routes/work/work';
import Root from './routes/root/root';
import Contact from './routes/contact/contact'
import Agora from "./routes/workPage/agora";
import Figure from './3delements/figure';

//framework
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//css
import './App.scss'

//fonts
import './fonts/PPRadioGrotesk-Regular.otf'
import './fonts/PPRadioGrotesk-Black.otf'

//i18n
import './i18n';

function App() {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Routes */}
          <Route index element={<Root />} />
          <Route path="work" element={<Work />} />
          <Route path="work/agora" element={<Agora />} />
          <Route path='contact' element={<Contact />} />
          <Route path='test3d' element={<Figure />} />
          {/* 404 page */}
          <Route path="*" element={<Work />} />
        </Routes>
      </AnimatePresence>
  )
}

export default App
