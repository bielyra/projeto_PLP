import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,  Route} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/homepage';
import Navbar from './components/navbar';
import Servico from './components/servico';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />,
        },
      {
        path: '/servico',
        element: <Servico />,
        },
    ]},
  
  ]);
    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
