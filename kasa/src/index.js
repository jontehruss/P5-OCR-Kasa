import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import des pages pour le router
import Home from "./pages/Home";
import About from "./pages/About";

// import React, { useState } from 'react';

// //  Création du router 
// const router = createBrowserRouter([
//   {
//     path: "/", // route principale
//     element: <App />, // composant principal qui contient le Outlet
//     children: [
//       {
//         path: "home", // route /home
//         element: <Home />,
//       },
//       {
//         path: "about", // route /about
//         element: <About />,
//       },
//     ],
//   },
// ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ! Possibilité de restaurer l'App en désactivant le router ic */}
    
    <App />

    {/* <RouterProvider router={router} /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
