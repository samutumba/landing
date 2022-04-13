import { FC } from "react";
import { Body, DevIcon, Footer, NavBar }  from "../../components";
import { DurhamCollegeIcon, MedAtlasIcon, ReservoirGator, githubUrl, linkedInUrl, mailUrl } from "../../constants";
import { DevEnvironments, Language, Tool } from "../../interfaces";
import { FaExternalLinkAlt } from "react-icons/fa";
import {BiFootball } from "react-icons/bi";
import {GiOldMicrophone } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import {
  BsHouseFill,
  BsMailbox2,
  BsGithub,
  BsDisplay,
  BsLinkedin,
  BsSpotify,
} from "react-icons/bs";


export const Resume = () => {
  return (
    <div>
      <Body>
        <NavBar link="Resume" />
        <div className="flex flex-row justify-center  text-midnight-blue font-title mt-9 dark:text-white font-bold md:text-5xl text-3xl ">
          <div className="w-1/6"></div>
          <div className="w-2/3 dark:text-white">
            <h1>Samuel Jeremiah Kayongo-Mutumba</h1>
          </div>
          <div className="w-1/6"></div>
        </div>
        <div className="flex flex-row flex-wrap md:mx-0 mx-5 justify-evenly my-2 text-midnight-blue dark:text-iron text-lg p-2 border-cyan-200 dark:border-blue-900 border-t-2 border-b-2">
          <div className="m-1 p-1">
            <p>
              <BsHouseFill /> Based in: Oshawa, ON
            </p>
          </div>
          <div className="m-1 p-1 text-gold dark:text-sun">
            <a href={mailUrl} className="hover:text-xl">
              <BsMailbox2 className="font-lg" /> samutumba@yahoo.com
            </a>
          </div>
          <div className="m-1 p-1">
            <a
              className="hover:text-xl"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              <p>
                <BsGithub /> Github
              </p>
            </a>
          </div>
          <div className="m-1 p-1">
            <a
              className="hover:text-xl"
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              <p>
                <BsLinkedin /> LinkedIn
              </p>
            </a>
          </div>
          <div className="m-1 p-1">
            <a
              className="hover:text-xl"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <BsDisplay /> Personal Site
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  text-midnight-blue dark:text-iron md:pr-0 pr-7 font-p">
          <div className="w-full md:w-3/4 mx-4 my-4 py-1">
            <div className="flex flex-col w-full">
              <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1 px-4 ">
                <h3 className="dark:text-white   font-title text-2xl font-bold">
                  Personal Profile
                </h3>
                <p className=" p-3">
                  Skilled software developer, good at using JavaScript, HTML and
                  other available technologies in order to contribute to team
                  projects and achieve company goals. Proactive, with proof of
                  going beyond and contributing to the team's goals and
                  objectives. High willingness to go the extra mile to ensuring
                  that not only the team's goals are met but the end user's
                  expectations are facilitated above all else.
                </p>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1">
                <h3 className="dark:text-white   font-title text-2xl font-bold">
                  Professional Experience
                </h3>
                <Experience
                  link="https://medatlas.com/"
                  title="Software Developer Intern"
                  place="MedAtlas"
                  start="July 2021"
                  location="Waterloo, ON"
                  image={MedAtlasIcon}
                >
                  <ul className="p-2 list-disc list-outside text-left">
                    <li>
                      MedAltas is a University of Waterloo start-up tasked with
                      providing virtual healthcare to various countries based in
                      Africa
                    </li>
                    <li>
                      As an intern, I was tasked with drafting the necessary
                      technologies and resources that would build the online
                      platform
                    </li>
                    <li>
                      I also undertook the development of concept websites in
                      HTML5/Bootstrap CSS/Node.js/Express/EJS to act as proof of
                      concept. This demo would test the efficiency of not only
                      the business logic but also there strategy but to document
                      the necessary information to spur on the ongoing
                      development of the commercial product
                    </li>
                    <li>
                      Currently, I work upon developing new features for the
                      site
                    </li>
                  </ul>
                </Experience>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1 p-3">
                <h3 className="dark:text-white  font-title text-2xl font-bold">
                  Education
                </h3>
                <Experience
                  link="https://durhamcollege.ca/programs/computer-programming-analyst-three-year#tabOverview"
                  title="Advanced Diploma in Computer Programming and Analysis"
                  place="Durham College"
                  start="Sep 2020"
                  end="May 2023"
                  location="Oshawa, ON"
                  image={DurhamCollegeIcon}
                >
                  <p className="pr-2 py-2 text-left">
                    This program offers comprehensive study in information
                    technology, systems development methodologies and
                    application programming built on a solid foundation of
                    business expertise. The curriculum includes in-depth
                    instruction and the practical application of structured,
                    mainframe and object-oriented programming languages.
                  </p>
                </Experience>
                <Experience
                  link="https://rhs.hcpss.org/"
                  title="Maryland High School Diploma"
                  place="Reservoir High School"
                  end="May 2020"
                  location="Fulton, MD"
                  image={ReservoirGator}
                ></Experience>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4  mx-4 my-4 py-1 rounded-lg order-1 md:order-2">
            <div className="flex flex-col w-full">
              <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                <h3 className="dark:text-sun text-gold  font-title text-2xl font-bold">
                  Skills
                </h3>
                <ul className="p-2 list-disc list-outside">
                  <li>Full Stack Web Development</li>
                  <li>Agile Development</li>
                  <li>Oral and Written Communication</li>
                  <li>Object Oriented Programming</li>
                  <li>Analytical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Creativity</li>
                  <li>Team Work</li>
                </ul>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                <h3 className="dark:text-white text-dirt  font-title text-xl font-bold">
                  Primary Stack
                </h3>
                <div className="flex flex-row flex-wrap ">
                  <div className="p-2">
                    <DevIcon stack={Language.JS} size="5xl" /> Javascript
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Language.CS} size="5xl" /> C#
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Language.HTML} size="5xl" /> HTML
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Tool.NodeJS} size="5xl" /> NodeJS
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Tool.React} size="5xl" /> React
                  </div>
                  <div className="p-2">
                    <DevIcon stack={DevEnvironments.MySQL} size="5xl" /> SQL
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Language.Java} size="5xl" /> Java
                  </div>
                  <div className="p-2">
                    <DevIcon stack={Language.PY} size="5xl" /> Python
                  </div>
                </div>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                <h3 className=" font-title text-2xl font-bold dark:text-white">
                  Interests & Hobbies
                </h3>
                <ul>
                  <li>
                    <BsSpotify /> Music
                  </li>
                  <li>
                    <BiFootball /> Football/Soccer
                  </li>
                  <li>
                    <GiOldMicrophone /> Stand Up Comedy
                  </li>
                  <li>
                    <HiOutlineDesktopComputer /> Structuring Websites
                  </li>
                </ul>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                <h3 className="dark:text-white  font-title text-2xl font-bold">
                  Projects
                </h3>
                <p>
                  Visit my Projects Page.{" "}
                  <a
                    href="/projects"
                    className="underline hover:font-bold hover:p-1"
                  >
                    Click Here
                  </a>
                </p>
              </div>
              <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                <h3 className="dark:text-white   font-title text-2xl font-bold">
                  References
                </h3>
                <p>Available on request via email</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Body>
    </div>
  );
};

interface IExperienceProps {
  place: String,
  image: string,
  start?: String,
  end?: String,
  children?: any,
  location: String,
  title: String
  link?: string
}


const Experience: FC<IExperienceProps> = ({place,image, start,end, children,location,title,link}) => {
  return (
    <div className="flex flex-col md:flex-row p-3 border-b-2">
      <div className="w-full md:w-1/6">
        <div className="flex flex-col items-center m-auto" >
          <img src={image} className="w-1/3 md:w-2/3 md:h-auto " alt="" />
        </div>
      </div>
      <div className="w-full md:w-5/6">
      <div className="flex justify-between">
        <div className="dark:text-white text-midnight-blue  font-title text-2xl text-left font-bold">
          {place} {link === undefined ? "" : <a href={link} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> </a>}
        </div>
        <div className="text-right ">
          {location}
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" dark:text-iron font-title text-left text-lg">
          {title}
        </div>
        <div className="text-right">
        {start === undefined? "":start + "-"}{end === undefined? "present":end }
        </div>
      </div>
      <div>
        {children}    
      </div>
      </div>
      
    </div>
  );
}

