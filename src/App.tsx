import React from 'react';
import './App.css';
import { ThemeProvider } from './hooks';
import { WebRoutes } from './routes';
import {HelmetProvider} from "react-helmet-async";

function App() {

  return (  
    <>
      <ThemeProvider>
          <HelmetProvider>
            <div className='App dark:bg-bottom-blue bg-tint-blue'>
            <WebRoutes /> 
            </div>
          </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
