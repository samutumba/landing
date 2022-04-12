import {Body, Footer, NavBar, Project }  from "../../components";
import { myProjects } from "../../constants";

export const Projects = () => {
  return (
      <>
          <Body>
            <NavBar link="Projects"/>
              <div className="flex flex-row justify-center  text-midnight-blue font-title mt-9 dark:text-white font-bold md:text-5xl text-3xl ">
                <div className="w-1/6"></div>
                <div className="w-2/3 text-midnight-blue dark:text-white">
                  <h1 className="text-5xl">Projects </h1>
                </div>
                <div className="w-1/6"></div>
              </div>
              <div className="mt-2">
                <Project projects= {myProjects} />
              </div>
            <Footer />
          </Body>   
      </>
  );
};

