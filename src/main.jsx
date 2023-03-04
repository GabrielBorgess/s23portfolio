import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from "react-router-dom";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "work",
    element: <Work />,
  },
  {
    path: "Cube",
    element: <Cube />,
  }
]);*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
)
