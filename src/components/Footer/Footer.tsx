import { ToggleTheme } from "..";
import { githubUrl, GoldLogo, YellowLogo, linkedInUrl, telegramUrl, mailUrl } from "../../constants";
import {BsEnvelopeFill, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";

export const Footer: any = () => {


    return (
      <footer className="block m-8 px-6 pt-3 rounded-b-lg mx-12  bg-transparent md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-iron  text-center md:text-left ">
          <a href="/" className="flex items-center">
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
        </span>
        <ul className="items-center mt-3 flex flex-row content-center text-2xl dark:text-iron text-dark-blue sm:mt-0">
          <li>
            <a
              href={githubUrl}
              className="mr-4 hover:underline md:mr-6 dark:hover:text-sun hover:text-gold"
            >
              <BsGithub />
            </a>
          </li>
          <li>
            <a
              href={linkedInUrl}
              className="mr-4 hover:underline md:mr-6 dark:hover:text-sun hover:text-gold"
            >
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a
              href={telegramUrl}
              className="mr-4 hover:underline md:mr-6 dark:hover:text-sun hover:text-gold"
            >
              <BsTelegram />
            </a>
          </li>
          <li>
            <a
              href={mailUrl}
              className="mr-4 hover:underline md:mr-6 dark:hover:text-sun hover:text-gold"
            >
              <BsEnvelopeFill />
            </a>
          </li>
        </ul>
      </footer>
    );
};