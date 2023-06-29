import React, {useContext, useState, createContext} from 'react'
import { useEffect } from 'react';
import { IconContext } from 'react-icons';
export const ThemeContext = createContext("dark")

function defaultFunc(): void{}
export const ThemeUpdateContext = createContext(defaultFunc)


export function useTheme() {
    return useContext(ThemeContext)
}

export function useToggle(){
    return useContext(ThemeUpdateContext)
}

type ThemeProviderProps ={
    children: React.ReactNode 
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState(localStorage.theme)

    useEffect(() => {
        localStorage.theme = theme;
        
        ( localStorage.theme === "dark" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark'))

    }, [theme]       
    )

    function toggleTheme() {
        var light = "light";
        var dark = "dark";
        setTheme(theme === "dark" ? light: dark)

      }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <IconContext.Provider value={{ className: "inline-block" }}>
          {children}
        </IconContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
