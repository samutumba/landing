import React from 'react';
import './App.css';
import { ThemeProvider } from './hooks';
import { WebRoutes } from './routes';


function App() {

  return (  
    <>
      <ThemeProvider>
          <div className='App dark:bg-bottom-blue bg-tint-blue'>
            <WebRoutes /> 
          </div>
      </ThemeProvider>
    </>
      
  );
}

export default App;
