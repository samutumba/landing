import React from 'react';
import { Contact, Toggle,ToggleTheme } from '../';
import { GoldLogo, YellowLogo } from '../../constants';
import { ToolTip } from '../ToolTip';
import { GiHamburgerMenu } from "react-icons/gi";


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
              <ToggleTheme
                dark={
                  <>
                    <img src={YellowLogo} alt="" className="w-auto h-6" />
                  </>
                }
                light={
                  <>
                    <img src={GoldLogo} alt="" className="w-auto h-6" />
                  </>
                }
              />
            </a>

            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-3 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <GiHamburgerMenu />   
            </button>
            <div className="hidden w-full lg:block lg:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 lg:flex-row md:space-x-8 lg:mt-0 lg:text-lg lg:font-medium">
                {navLinks.map((navLink, i) => (
                  <li key={i}>
                    <PageLink
                      data-tooltip-target={"tooltip-" + navLink.name}
                      data-tooltip-trigger="hover"
                      data-tooltip-placement="bottom"
                      activeLink={link}
                      name={navLink.name}
                      link={navLink.link}
                    />
                    <ToolTip id={"tooltip-" + navLink.name}>
                      {"View my " + navLink.name + " page"}
                    </ToolTip>
                  </li>
                ))}
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
