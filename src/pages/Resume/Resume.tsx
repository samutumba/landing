import { FC } from "react";
import { Body, DevIcon, Footer, NavBar }  from "../../components";
import { DurhamCollegeIcon, MedAtlasIcon, ReservoirGator, githubUrl, linkedInUrl, mailUrl } from "../../constants";
import { DevEnvironments, Language, Tool } from "../../interfaces";


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
                <div className="m-1 p-1"><p><i className="bi bi-house-fill "></i> Based in: Oshawa, ON</p></div>
                <div className="m-1 p-1 text-gold dark:text-sun"><a href={mailUrl} className="hover:text-xl"><i className="bi bi-envelope-fill"></i> samutumba@yahoo.com</a></div>
                <div className="m-1 p-1"><a className="hover:text-xl" href={githubUrl} target="_blank" rel="noreferrer"><p><i className="bi bi-github"></i> Github</p></a></div>
                <div className="m-1 p-1"><a className="hover:text-xl" href={linkedInUrl} target="_blank" rel="noreferrer"><p><i className="bi bi-linkedin"></i> LinkedIn</p></a></div>
                <div className="m-1 p-1"><a className="hover:text-xl" href="/" target="_blank" rel="noreferrer"><i className="bi bi-pc-display"></i> Personal Site</a></div>
            </div>     
            <div className="flex flex-col md:flex-row  text-midnight-blue dark:text-iron md:pr-0 pr-7 font-p">
              <div className="w-full md:w-3/4 mx-4 my-4 py-1">
                <div className="flex flex-col w-full">
                  <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1 px-4 ">
                    <h3 className="dark:text-white   font-title text-2xl font-bold">Personal Profile</h3>
                    <p className=" p-3">Skilled software developer, good at using JavaScript, HTML and other available technologies in order to contribute to
                        team projects and achieve company goals. Proactive, with proof of going beyond and contributing to the team's goals and objectives. 
                        High willingness to go the extra mile to ensuring that not only the team's goals are met but the end user's
                        expectations are facilitated above all else.</p>
                  </div>
                  <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1">
                    <h3 className="dark:text-white   font-title text-2xl font-bold">Professional Experience</h3>
                    <Experience link="https://medatlas.com/" title="Software Developer Intern" place="MedAtlas"  start="July 2021" location="Waterloo, ON" image={MedAtlasIcon}>
                        <ul className="p-2 list-disc list-outside text-left">
                          <li>MedAltas is a University of Waterloo start-up tasked with providing virtual healthcare to various countries based in Africa</li>
                          <li>As an intern, I was tasked with drafting the necessary technologies and resources that would build the online platform</li>
                          <li>I also undertook the development of concept websites in HTML5/Bootstrap CSS/Node.js/Express/EJS to act as proof of concept.
                              This demo would test the efficiency of not only the business logic but also there strategy but to document the necessary
                                information to spur on the ongoing development of the commercial product</li>
                          <li>Currently, I work upon developing new features for the site</li>
                        </ul>
                    </Experience>
                  </div>
                  <div className="border-4 border-cyan-200 dark:border-blue-900 rounded-lg my-4 py-1 p-3">
                    <h3 className="dark:text-white  font-title text-2xl font-bold">Education</h3>              
                      <Experience link="https://durhamcollege.ca/programs/computer-programming-analyst-three-year#tabOverview" title="Advanced Diploma in Computer Programming and Analysis" place="Durham College" start="Sep 2020" end="May 2023" location="Oshawa, ON" image={DurhamCollegeIcon}>
                        <p className="pr-2 py-2 text-left">
                          This program offers comprehensive study in information technology, systems development methodologies and application programming built on a solid foundation of business expertise. The curriculum includes in-depth instruction and the practical application of structured, mainframe and object-oriented programming languages.
                        </p>
                      </Experience>
                      <Experience link="https://rhs.hcpss.org/" title="Maryland High School Diploma" place="Reservoir High School"  end="May 2020" location="Fulton, MD" image={ReservoirGator}>
                      </Experience>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/4  mx-4 my-4 py-1 rounded-lg order-1 md:order-2">
                <div className="flex flex-col w-full">
                  <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                    <h3 className="dark:text-sun text-gold  font-title text-2xl font-bold">Skills</h3>
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
                    <h3 className="dark:text-white text-dirt  font-title text-2xl font-bold">Primary Stack</h3>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-6 ">
                      <div className="p-2">
                        <DevIcon stack={Language.JS} size="5xl"/> Javascript
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Language.CS} size="5xl"/> C#
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Language.HTML} size="5xl"/> HTML
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Tool.NodeJS} size="5xl"/> NodeJS
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Tool.React} size="5xl"/> React
                      </div>
                      <div className="p-2">
                        <DevIcon stack={DevEnvironments.MySQL} size="5xl"/> SQL
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Language.Java} size="5xl"/> Java
                      </div>
                      <div className="p-2">
                        <DevIcon stack={Language.PY} size="5xl"/> Python
                      </div>
                    </div>
                  </div>
                  <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                    <h3 className=" font-title text-2xl font-bold   dark:text-white">Interests & Hobbies</h3>
                    <ul>
                      <li><i className="bi bi-spotify"></i> Music</li>
                      <li><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="inline-block"  width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 128 128"><path fill="#C8C8C8" d="M63.95 4.06c-35.52-.5-61.9 29.92-60.13 62.45c2.09 38.31 29.48 57.56 61.52 57.34c33.66-.23 59.2-24.09 58.5-60.13c-.69-35.98-27.15-59.19-59.89-59.66z"/><path fill="#FFF" d="M35.86 15.21C11 29.46-4.78 69.85 21.7 100.41c3.24 3.74 8.39 6.35 12.3 8.13c26.7 12.07 59.01-6.49 71.51-20.64c9.92-11.23 13.57-18.68 12.39-34.01c-.91-11.92-6.01-23.43-16.58-31.94c-23.9-19.28-49.67-15.8-65.46-6.74z"/><path fill="#171717" d="M60.9 39.79c-.09-.05-9.34-5.36-16.52-8.02c-7.48-2.77-13-4.26-13.06-4.27l1.03-3.86c.23.06 5.75 1.54 13.42 4.39c7.5 2.78 16.74 8.08 17.13 8.31l-2 3.45zm16.267-10.436L82.61 9.932l3.852 1.079l-5.442 19.422zM117.6 54.52c-.05-.02-5.37-2.04-11.31-3.65c-4.47-1.21-10.23-2.44-10.29-2.45l.83-3.91c.24.05 5.92 1.26 10.5 2.5c6.15 1.66 11.47 3.69 11.7 3.77l-1.43 3.74zM86.13 93.76c0-.06-.5-6.16-1.7-12.4c-1.19-6.16-3.46-11.96-3.48-12.01l3.72-1.47c.1.25 2.43 6.19 3.69 12.73c1.24 6.47 1.74 12.58 1.76 12.84l-3.99.31zm19.89 5.56l-2.64-3.01c.04-.03 3.88-3.43 8.62-9.83c4.38-5.92 6.4-11.1 6.42-11.16l3.73 1.43c-.09.23-2.24 5.75-6.94 12.1c-5.01 6.78-9.02 10.32-9.19 10.47zM32.847 78.88L55.99 58.223l2.664 2.984L35.51 81.864zM12.91 73.35c-.06-.39-1.38-9.64-1.38-18.1c0-8.44.96-16.25 1.01-16.58l3.97.5c-.01.08-.97 7.9-.97 16.08c0 8.16 1.33 17.44 1.34 17.53l-3.97.57zm58.39 40.3c-.25-.03-6.35-.8-16.9-3.9c-6.72-1.98-14.4-6.04-14.73-6.21l1.88-3.53c.08.04 7.65 4.05 13.98 5.91c10.2 3 16.2 3.76 16.26 3.77l-.49 3.96z"/><path fill="#474C4F" d="M53.37 32.72c-.31.78.1 28.63.73 29.46s28.63 10.34 29.88 10.03c1.25-.31 16.19-23.82 16.19-24.76S81.79 23.84 80.85 23.63c-.94-.21-27.06 8.04-27.48 9.09zm63.99 3.42s-4.12 13.71-4.12 14.76c0 1.04 2.51 6.79 3.66 13.89c1.15 7.1-.52 17.76.21 18.18c.73.42 4.35.21 4.35.21s3.49-10.97 2.02-25.07c-1.47-14.11-6.12-21.97-6.12-21.97zM87.64 90.7c-.84.08-22.88 19.01-22.78 19.54c.1.52 8.63 13.09 8.63 13.09s10.72-.85 20.54-6.17s13.55-10.05 13.55-10.05s1.36-12.64.84-12.74c-.51-.12-19.73-3.77-20.78-3.67zM14.09 67.09c-.57.47-3.87 7.73-4.81 11.81c-.94 4.07-1.46 7.94-1.46 7.94s2.51 7.26 6.27 12.64c4.66 6.66 10.72 11.36 10.72 11.36s19.78-6.03 19.89-6.87s-2.3-8.15-3.97-14.21c-1.67-6.06-1.98-12.85-2.61-13.27c-.63-.42-7-2.4-12.01-4.39s-11.39-5.53-12.02-5.01zm-6.2-25.21s5.47 4.73 6.31 4.73c.84 0 6.14-7.02 11.49-11.28c7.21-5.75 10.76-7.63 10.87-8.36c.1-.73 3.24-18.18 3.24-18.18s-11.6 4.39-20.06 14.1S7.89 41.88 7.89 41.88zM67.05 4.13s6.67 3.43 9.1 5.12c2.43 1.69 6.01 5.27 7.07 5.38c1.05.11 15.56.12 15.56.12s-6.58-4.5-13.87-7.08c-8.77-3.11-17.86-3.54-17.86-3.54z"/></svg> Football/Soccer</li>
                      <li><i className="bi bi-person-video3"></i> Stand Up Comedy</li>
                      <li><i className="bi bi-pc-display"></i> Structuring Websites</li>
                    </ul>
                  </div>
                  <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                    <h3 className="dark:text-white  font-title text-2xl font-bold">Projects</h3>
                    <p>Visit my Projects Page. <a href="/projects" className="underline hover:font-bold hover:p-1">Click Here</a></p>
                  </div>
                  <div className="border-4 border-cyan-200 dark:border-blue-900  rounded-lg my-4 py-1 px-4 ">
                    <h3 className="dark:text-white   font-title text-2xl font-bold">References</h3>
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
  children: any,
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
          {place} {link === undefined ? "" : <a href={link} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right text-lg"></i></a>}
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

