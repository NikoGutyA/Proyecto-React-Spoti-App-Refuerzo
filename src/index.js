import React from 'react';
import ReactDOM from 'react-dom/client';

//Componentes
import { Home } from './Components/Home/Home';
import { Members } from './Components/Members/Members';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Members />
    {/* <Home /> */}

  </React.StrictMode>
);


