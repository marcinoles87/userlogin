import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

 const domain = process.env.REACT_APP_AUTH0_DOMAIN;
 const client = process.env.REACT_APP_AUTH0_CLIENT;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider>
    <App />
  </Auth0Provider>
);

