import React, { FC } from "react";
import { DevIcon } from "..";
import { MyProjects, ProjectType, SingleProject } from "../../interfaces";
import { AiFillApi, AiFillGithub, AiFillFileZip } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose, IoMdWarning } from "react-icons/io";

export const Project: FC<MyProjects> = ({ projects }) => {
  return (
    <>
      <div className="flex flex-col justify-center p-12">
        {projects.map((proj, index) => (
          <IndividualProject p={proj} i={index} />
        ))}
      </div>
    </>
  );
};

interface IndividualProjectProps {
  p: SingleProject;
  i: number;
}

const ProjectModal: FC<IndividualProjectProps> = ({p , i}) => {
  return (
    <div
      id={i + "-modal"}
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
        <div className="relative bg-yellow-50 dark:bg-dark-blue text-midnight-blue dark:text-gray-200 rounded-lg shadow ">
          <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
            <h3 className="text-2xl font-bold ">{p.title}</h3>

            <button
              type="button"
              className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle={i + "-modal"}
            >
              <IoMdClose />
            </button>
          </div>

          <div className="p-6 space-y-6 text-left">
            <p className="ml-3 text-lg">
              Type {p.type === ProjectType.Ind ? ": Individual " : ": Team"}
            </p>
            <p className="mb-3 pl-5 text-left font-normal ">{p.description}</p>

            <div className="flex flex-row flex-wrap">
              <div className="flex w-full flex-row flex-wrap rounded-lg items-center border-1 justify-start">
                <h6 className="text-center sm:text-left w-1/6">
                  Software Used:
                </h6>
                {p.language.map((lang, i) => (
                  <div
                    key={i}
                    className="flex flex-col text-center align-middle p-1 m-3 "
                  >
                    <DevIcon stack={lang} size="6xl" /> {lang}
                  </div>
                ))}
                {p.environment.map((environment, i) => (
                  <div key={i} className="flex flex-col text-center p-1 m-1 ">
                    <DevIcon stack={environment} size="6xl" /> {environment}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            Access the files:
            {p.apis === undefined ? (
              <></>
            ) : (
              <>
                <div className="flex flex-row  rounded-lg border-1 justify-evenly">
                  <h6>APIS Integrated: </h6>
                  {p.apis.map((api, i) => (
                    <div key={i} className="p-1 m-1 ">
                      <AiFillApi /> {api}
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="flex flex-row  justify-end ">
              {p.links.github === undefined ? (
                <></>
              ) : (
                <div className="mx-3">
                  <a href={p.links.github} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
              )}
              {p.links.url === undefined ? (
                <></>
              ) : (
                <div className="mx-3">
                  <a href={p.links.url} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              )}
              {p.links.file === undefined ? (
                <></>
              ) : (
                <>
                  <div className="mx-3">
                    <AiFillFileZip data-modal-toggle={p.title + "-modal"}/>
                    <span className="">File</span>
                  </div>
                  <div
                    id={p.title + "-modal"}
                    tabIndex={-1}
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
                  >
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex justify-end p-2">
                          <button
                            type="button"
                            className="dark:text-white text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle={p.title + "-modal"}
                          >
                            <IoMdClose />
                          </button>
                        </div>
                        <div className="p-6 pt-0 text-center">
                          
                          <IoMdWarning className="text-black dark:text-red-500 text-5xl mb-3" />
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to download this project file?
                          </h3>
                          <a
                            href={p.links.file}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button
                              type="button"
                              className="text-white bg-gold dark:bg-midnight-blue dark:hover:bg-gold hover:bg-midnight-blue focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Yes, Download
                            </button>
                          </a>
                          <button
                            data-modal-toggle={p.title + "-modal"}
                            type="button"
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          >
                            No, cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const IndividualProject: FC<IndividualProjectProps> = ({ p, i }) => {
  return (
    <>
      <div
        data-modal-toggle={i + "-modal"}
        className="hover:outline hover:outline-offset-2 hover:border-none flex flex-col items-center hover:outline-5 hover:outline-gold hover:dark:outline-evening-blue hover:my-2 rounded-lg border shadow-md md:flex-row my-4  "
      >
        <img
          className="object-fill m-4 w-full h-full rounded-t-lg md:h-auto md:w-1/3 rounded-sm"
          src={p.coverImage}
          alt=""
        />
        <div className="flex flex-col m-4 leading-normal text-left">
          <h2 className="mb-2 pl-5 text-left text-5xl font-bold font-title tracking-tight text-gold dark:text-white">
            {p.title}
          </h2>
          <p className="ml-3 p-3 text-lg">
            Type {p.type === ProjectType.Ind ? ": Individual " : ": Team"}
          </p>
          <p className="mb-3 pl-5 text-left font-normal text-gray-700 dark:text-gray-400">
            {p.description}
          </p>
        </div>
      </div>

      <ProjectModal p={p} i={i}></ProjectModal>
    </>
  );
};
