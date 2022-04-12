import React from 'react';
import { Contact, Toggle,ToggleTheme } from '../';
import { GoldLogo, YellowLogo } from '../../constants';


interface INavBar {
    link: string;
}

const navLinks = [
    {name: "Home", link:"/"},
    {name: "Projects", link:"/projects"},
    {name: "Resume", link:"/resume"},
]

export const NavBar: React.FC<INavBar> = ({
    link
}) => {

    return (
        <>
        <nav className="bg-transparent sm:px-4 px-5 pt-6">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center justify-start">
                <ToggleTheme dark={<><img src={YellowLogo} alt="" className="w-auto h-6"/></>} light={<><img src={GoldLogo} alt="" className="w-auto h-6"/></>} /> 
            </a>
          
          <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="mobile-menu">
            
            <ul className="flex flex-col mt-4 lg:flex-row md:space-x-8 lg:mt-0 lg:text-lg lg:font-medium">
                {navLinks.map((navLink,i ) => 
                    <li key={i}>
                        <PageLink activeLink={link} name={navLink.name} link={navLink.link} />
                    </li>
                )}
              <li>
                
                <Contact />
              </li>
              <li>
                <Toggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
        </>
        
    );
};

interface IPageLink {
    activeLink: string;
    name: string;
    link: string;

}

const PageLink: React.FC<IPageLink> = ({
    activeLink,
    link,
    name,

}) => {
    if (activeLink === name){
        return (
            <a href={link} className="block py-2 pr-4 pl-3 dark:text-sun font-p text-gold bg-transparent border-b dark:lg:hover:text-iron lg:hover:bg-dark-blue hover:text-iron lg:border-0  lg:bg-transparent lg:p-0 " aria-current="page">{name}</a>
        );
    }else{
        return (
            <a href={link} className="block py-2 pr-4 pl-3 dark:text-iron font-p text-dark-blue bg-transparent dark:hover:text-sun hover:text-gold border-b  hover:transparent lg:hover:bg-transparent lg:border-0  dark:lg:hover:text-sun lg:hover:text-gold lg:p-0 ">{name}</a>
        );
    }
}
