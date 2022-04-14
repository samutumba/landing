import React  from "react";
import {Body, DevIcon, Footer, NavBar }  from "../../components";
import { StackType, DevEnvironments, Language, Tool } from "../../interfaces";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

const proficient: StackType[] = [
    Language.JS,
    Language.PY,
    Language.CSS,
    Language.CS,
    Language.HTML,
    Language.SQL,
]

const semiProficient: StackType[] = [
    Tool.React,
    Tool.NodeJS,
    Language.Type,
    Language.PHP,
    Language.Java,
    Language.CPP,
]

const basicProficiency: StackType[] = [
    Tool.Tailwind,
    Tool.Express,
    Tool.Angular,
    Language.Bash,
    Tool.dotNet,
    Tool.NextJS
    
]

const environments: DevEnvironments[] = [
    DevEnvironments.VSEnt,
    DevEnvironments.VSCode,
    DevEnvironments.Apache,
    DevEnvironments.Linux,
    DevEnvironments.PyCharm,
    DevEnvironments.Atom,
    DevEnvironments.SQLServer,
    DevEnvironments.MySQL,
    DevEnvironments.PgSQL,
    DevEnvironments.MongoDB

]

const qAndA:questionAndAnswer[] = [
    {
        question: "My Greatest Strength as a Developer?",
        answer: "My Perseverance to find, solve bugs and optimize my code bases."
    },
    {
        question: "Which biggest personal success so far?",
        answer: "Becoming a co-founder of MedAltas as well as providing the proof of concept used to launch the current platform."
    },
    {
        question: "What are my principles?",
        answer: "God comes First, Maintain simplicity, Avoid Repetition, Even code needs spring cleaning"
    },
    {
        question: "Where do I see myself in five years?",
        answer: "I see myself working growing within an institution to continue developing software solutions to satisfy institutions needs"
    },

]

export const Home = () => {
  return (
    <div className="flex flex-col flex-wrap">
      <Helmet>
        <title>Home - Samutumba</title>
        <meta name="description" content="Find out a little bit more about Samuel J Kayongo Mutumba" />
        <link rel="canonical" href="/" />      
      </Helmet>
      <Body>
        <NavBar link="Home" />
        <Header>
          <div className="container mx-auto md:p-0 overflow-hidden h-auto">
            <div className="px-6 py-0 md:px-12 h-auto text-center lg:text-left">
              <div className="container mx-auto xl:px-32 h-auto">
                <div className="grid lg:grid-cols-2 items-center h-auto select-none">
                  <div className="lg:mt-0 space-x-5 h-auto">
                    <h1 className="text-center mt-5 lg:mt-0 lg:text-right text-6xl dark:text-white text-dark-blue font-title md:text-8xl xl:text-9xl font-bold tracking-tight mb-3 md:mb-7">
                      Samuel J.K
                      <br />
                      <span className="pt-2 md:text-9xl">Mutumba</span>
                    </h1>
                  </div>
                  <div className="mb-4 lg:mb-0  h-auto">
                    <img
                      src="https://samutumba.github.io/resources/img/me.png"
                      className=" w-full object-fit "
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Header>
        <div className="block container mt-3 mx-auto ">
          <div className="px-6 py-3 md:px-12 text-gray-800  text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 select-none">
              <div>
                <h1 className="text-5xl font-bold font-title dark:text-sun text-gold">
                  Software Developer <br />
                  <span className="dark:text-white text-dark-blue font-p">
                    Based in Canada.
                  </span>
                </h1>
              </div>
              <div className="lg:col-span-2">
                <p className="dark:text-iron text-dark-blue font-p text-m text-left whitespace-normal">
                  <br /> Software Developer with over 2 years experience coding
                  well tested, full stack web and .Net applications. Familiar
                  with working in an agile environment to brainstorm, test, and
                  implement solutions to different problems. Passionate about
                  problem solving and research in order to scout the most
                  efficient avenues to achieve common team.
                  <br /> <br />
                  The IT industry is rapidly growing, innovation happens every
                  day and my passion is to learn and adapt and thrives in this
                  environment. More bugs to fix, more systems to build, and more
                  solutions, innovations, and ideas to code to life. The
                  possibilities are not only endless but they are achievable
                  with the skills I have and will continue to accumulate. Let's
                  shape the solutions to the problems you may not even realize
                  your industry has yet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 pb-3 pt-12 container mt-3 mx-auto h-auto w-full">
          <div className="flex flex-wrap justify-center flex-col gap-4 md:flex-row w-full font-title">
            <ExperienceDisplay
              proficiency="Most Proficient"
              stack={proficient}
            />
            <ExperienceDisplay
              proficiency="Semi-Proficient"
              stack={semiProficient}
            />
            <ExperienceDisplay
              proficiency="Basic Proficiency"
              stack={basicProficiency}
            />
          </div>
          <div className="block h-full lg:text-left w-full font-title">
            <EnvironmentDisplay environment={environments} />
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-3xl font-bold font-title mb-2 dark:text-sun text-gold">
            Common Questions and Answers
          </h1>
          <QandA section={qAndA} />
        </div>
        <div className="block">
          <Footer />
        </div>
      </Body>
      <div></div>
    </div>
  );
};


interface IHeaderProps {
    children: any
}
 
const Header: React.FC<IHeaderProps> = ({
    children
}) => {
    return ( 
        <div className="block bg-transparent h-auto">
            <div className="container px-4 mx-auto h-auto">
                {children}
            </div>
        </div>
        
     );
}

interface IExperienceProps {
    proficiency: string,
    stack: StackType[],
}

const ExperienceDisplay: React.FC<IExperienceProps> = ({
    proficiency,
    stack
}) => {
    return (
        <div className="inline-block font-title bg-transparent md:justify-center content-center w-full md:w-1/4 h-full px-2 pb-4 ">
            <div className="flex flex-col justify-center m-auto h-full w-full">
                <div className="inline-grid grid-cols-3 place-content-center gap-x-6 gap-y-4 w-10/12">
                    {stack.map ((tech, key) => 
                        <div key={key} className="flex flex-col flex-wrap content-center text-center h-auto w-25 sm:my-1 md:px-0" >
                            <DevIcon stack={tech} />
                            {tech}
                        </div>
                    )}
                </div>
                <div className=" h-auto">            
                    <h5 className="mb-2 mt-6 text-2xl font-bold tracking-tight text-title text-center dark:text-sun text-gold">{ proficiency }</h5>
                </div>
            </div>
        </div>
    )
}

interface IEnvironmentProps {
    environment: DevEnvironments[],
}

const EnvironmentDisplay: React.FC<IEnvironmentProps> = ({
    environment,
}) => {
    return (
      <div className="block w-full h-auto dark:text-white text-dark-blue text-2xl place-content-center">
        <div className="flex flex-row justify-center flex-wrap space-x-6 pt-4 w-full h-full text-center">
          {environment.map((env, i) => (
            <div
              key={i}
              className="flex flex-col text-lg text-center h-auto"
            >
              <DevIcon stack={env} />
              {env}
            </div>
          ))}
        </div>
        <div className="block w-full h-auto">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-title text-center pt-4 dark:text-sun text-gold">
            My Development Environments
          </h5>
        </div>
      </div>
    );
}

type questionAndAnswer = {
    question: string,
    answer: any
}

interface IQandAProps {
    section: questionAndAnswer[]
}

const QandA: React.FC<IQandAProps> = ({section}) => {
    return (
      <>
        <div
          id="accordion-open"
          data-accordion="open"
          className="md:w-4/5 mx-auto"
        >
          {section.map((sec, i) => (
            <React.Fragment key={i}>
              <h2 id={"accordion-color-heading-" + i}>
                <button
                  type="button"
                  className="flex justify-between items-center p-5 w-full font-medium text-left  border border-b-0 border-gray-200 dark:focus:text-midnight-blue focus:text-white dark:focus:ring-sun dark:focus:bg-sun focus:ring-gold focus:bg-gold focus:ring-4   dark:border-gray-700 "
                  data-accordion-target={"#accordion-color-body-" + i}
                  aria-expanded="true"
                  aria-controls={"accordion-color-body-" + i}
                >
                  <span className="font-bold font-title ">
                    <BsQuestionCircleFill /> {sec.question}
                  </span>
                  <svg
                    data-accordion-icon
                    className="w-6 h-6 rotate-180 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </h2>
              <div
                id={"accordion-color-body-" + i}
                className="hidden"
                aria-labelledby={"accordion-color-heading-" + i}
              >
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 ">
                  <p className="mb-2 text-left dark:text-iron text-dark-blue font-p text-m ">
                    {sec.answer}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </>
    );
}
 
