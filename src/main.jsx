import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/suse';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './Components/utils/global.context';
import ThemeProvider from './Components/utils/ThemeProvider';
import InitColorSchemeScript from '@mui/joy/InitColorSchemeScript';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <InitColorSchemeScript />
      <ContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


