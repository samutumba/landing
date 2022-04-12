import React from "react"
import { useTheme, useToggle } from "../../hooks";

export const Toggle = () => {

    const theme = useTheme();
    const toggle = useToggle();
     
    function isDark(){
        if(theme === 'dark'){
            return true;
        }else{
            return false;
        }
    }

    function changeTheme(){
        toggle();
    }

  return (
    <button id="theme-toggle" type="button" className=" focus:outline-none focus:ring-4  rounded-full text-m">
        { isDark()? <i className="bi bi-brightness-high text-gold dark:text-sun  hover:text-gold" onClick={ changeTheme}></i> :  <i className="bi bi-moon dark:hover:text-gold text-gold dark:text-sun" onClick={ changeTheme }></i> }
    </button>
  )
}

interface IToggleThemeProps {
    dark: any
    light: any
}

export const ToggleTheme: React.FC<IToggleThemeProps> = ({dark, light}) => {
    const theme = useTheme()
    
    // eslint-disable-next-line 
    if(theme == "dark"){
        return dark;
    }else{
        return light;
    }
}





