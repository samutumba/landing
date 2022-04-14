import React, { FC } from "react";
import { DevIcon } from "..";
import { MyProjects, ProjectType, SingleProject } from "../../interfaces";
import { AiFillApi, AiFillGithub, AiFillFileZip } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose, IoMdWarning } from "react-icons/io";

export const Project: FC<MyProjects> = ({ projects }) => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center p-5">
        {projects.map((proj, index) => (
          <div key={index}>
            <IndividualProject p={proj} />
          </div>
        ))}
      </div>
    </>
  );
};

interface IndividualProjectProps {
  p: SingleProject;
}

const ProjectModal: FC<IndividualProjectProps> = ({ p }) => {
  return (
    <div
      id={p.title + "-modal"}
      className="hidden overflow-y-auto overflow-x-auto fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
        <div className="relative bg-yellow-50 dark:bg-dark-blue text-midnight-blue dark:text-gray-200 rounded-lg shadow ">
          <div className="flex justify-between items-center p-5 rounded-t dark:border-gray-600">
            <h3 className="text-5xl font-title font-bold pl-3">{p.title}</h3>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-base p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle={p.title + "-modal"}
            >
              <IoMdClose />
            </button>
          </div>
          <div className="p-5 space-y-6 text-left">
            <p className="ml-3 text-lg">
              Type {p.type === ProjectType.Ind ? ": Individual " : ": Team"}
            </p>
            <p className="mb-3 pl-5 text-left font-normal ">{p.description}</p>

            <div className="flex flex-row flex-wrap">
              <div className="flex w-full flex-row flex-wrap rounded-lg items-center border-1 justify-start">
                <h6 className="text-center sm:text-left w-1/6">
                  Software Used:
                </h6>
                {p.language.map((lang, key) => (
                  <div
                    key={key}
                    className="flex flex-col text-center align-middle p-1 m-3 "
                  >
                    <DevIcon stack={lang} size="6xl" /> {lang}
                  </div>
                ))}
                {p.environment.map((environment, key) => (
                  <div key={key} className="flex flex-col text-center p-1 m-1 ">
                    <DevIcon stack={environment} size="6xl" /> {environment}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-row flex-wrap place-content-center">
              {p.gallery ? (
                p.gallery.map((picture, index) => (
                  <div key={index} className="flex w-80 m-4 bg-iron rounded-lg h-60">
                    <img
                      className="object-fill self-center max-h-60 w-11/12 h-auto rounded-lg m-auto "
                      src={picture}
                      alt=""
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className=" justify-content-evenly p-6 space-x-2 text-3xl border-gray-200 dark:border-gray-600">
            <div>
              {p.apis === undefined ? (
                <></>
              ) : (
                <>
                  <div className="flex flex-row rounded-lg border-1 justify-evenly">
                    <h6>APIS Integrated: </h6>
                    {p.apis.map((api, key) => (
                      <div key={key} className="p-1 m-1 ">
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
                    <div
                      className="mx-3 text-xl"
                      data-modal-toggle={p.title + "-file-modal"}
                    >
                      <AiFillFileZip />
                      <span className="">File</span>
                    </div>
                    <FileModal p={p} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 
};

const FileModal: FC<IndividualProjectProps> = ({p}) => {
   return (
     <div
       id={p.title + "-file-modal"}
       tabIndex={-1}
       className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
     >
       <div className="relative p-4 w-full max-w-md h-full md:h-auto">
         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
           <div className="flex justify-end p-2">
             <button
               type="button"
               className="dark:text-white text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
               data-modal-toggle={p.title + "-file-modal"}
             >
               <IoMdClose />
             </button>
           </div>
           <div className="p-6 pt-0 text-center">
             <IoMdWarning className="text-black dark:text-red-500 text-5xl mb-3" />
             <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
               Are you sure you want to download this project file?
             </h3>
             <a href={p.links.file} target="_blank" rel="noreferrer">
               <button
                 type="button"
                 className="text-white bg-gold dark:bg-midnight-blue dark:hover:bg-gold hover:bg-midnight-blue focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
               >
                 Yes, Download
               </button>
             </a>
             <button
               data-modal-toggle={p.title + "-file-modal"}
               type="button"
               className="text-gray-500 bg-white hover:p-2 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
             >
               No, cancel
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 };

const IndividualProject: FC<IndividualProjectProps> = ({ p }) => {
  let lang = p.language.slice(0, 3);

  return (
    <div>
      <div
        className="flex m-4 flex-col max-w-sm h-auto hover:ring-4 ring-offset-4 ring-gold dark:ring-evening-blue  rounded-lg"
        data-modal-toggle={p.title + "-modal"}
      >
        <div className="bg-shade-blue dark:bg-white h-80 flex rounded-xl place-content-center">
          <img
            className="object-fill self-center max-h-72 w-4/5 h-auto rounded-lg m-auto "
            src={p.coverImage}
            alt=""
          />
        </div>
        <div className="mt-3 text-3xl font-title font-bold text-left text-gold dark:text-white">
          {p.title}
        </div>
        <div className="text-lg items-center text-gray-700 dark:text-gray-400 flex flex-row gap-3">
          {lang.map((l, i) => (
            <React.Fragment key={i}>
              <DevIcon stack={l} size="2xl" />
              <div className="my-auto">{l}</div>
            </React.Fragment>
          ))}
        </div>
        <div className="mb-3 mt-4">
          <p className=" text-left font-normal text-gray-700 dark:text-gray-400">
            {p.description.slice(0, 96)}
            <span className="font-bold">...</span>
          </p>
        </div>
      </div>

      <ProjectModal p={p}></ProjectModal>
    </div>
  );
};
