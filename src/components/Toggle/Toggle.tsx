import React from "react"
import { useTheme, useToggle } from "../../hooks";
import { BsBrightnessHighFill, BsMoonFill } from "react-icons/bs";

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
        { isDark()? <div className="text-gold dark:text-sun  hover:text-gold" onClick={ changeTheme}> <BsBrightnessHighFill/> </div> :  <div className="dark:hover:text-gold text-gold dark:text-sun" onClick={ changeTheme }><BsMoonFill /></div> }
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





