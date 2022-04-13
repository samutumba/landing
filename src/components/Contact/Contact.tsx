import React from "react";
import { ToolTip } from "../ToolTip";
import { githubUrl, linkedInUrl, mailUrl, telegramUrl } from './../../constants';
import { IoMdClose } from 'react-icons/io';
import {
  BsLinkedin,
  BsGithub,
  BsTelegram,
  BsEnvelopeFill,
} from "react-icons/bs"; 

export const Contact = () => {
    return (
      <>
        <button
          type="button"
          data-tooltip-target="tooltip-contact"
          data-tooltip-trigger="hover"
          data-tooltip-placement="bottom"
          data-modal-toggle="contactModal"
          className="block dark:text-midnight-blue text-tint-blue mx-auto dark:bg-sun bg-gold dark:hover:bg-iron hover:bg-midnight-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center "
        >
          Contact
        </button>

        <ToolTip id="tooltip-contact">
          Click here to see contact options
        </ToolTip>

        <div
          id="contactModal"
          aria-hidden="true"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative  rounded-lg shadow bg-gray-200">
              <div className="flex justify-between items-center py-4 px-6 rounded-t border-b border-gray-600">
                <h3 className="text-base font-semibold  lg:text-xl text-midnight-blue font-title">
                  Feel Free to Contact
                </h3>
                <button
                  type="button"
                  className="text-midnight-blue bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                  data-modal-toggle="contactModal"
                >
                  <IoMdClose />
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm font-normal  text-gray-700">
                  For job openings, to check out more of my work, discuss
                  project ideas, give advice, lay comments or to connect using
                  any one of these avenues
                </p>
                <ul className="my-4 space-y-3 text-white">
                  <li>
                    <a
                      href={linkedInUrl}
                      data-tooltip-target="tooltip-linkedIn"
                      data-tooltip-trigger="hover"
                      data-tooltip-placement="bottom"
                      className="h-12 flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-midnight-blue hover:bg-gray-500 "
                    >
                      <ToolTip id="tooltip-linkedIn">
                        View my LinkedIn profile
                      </ToolTip>
                      <BsLinkedin />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        LinkedIn
                      </span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-bold rounded text-midnight-blue  dark:bg-sun bg-gold">
                        Best
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={mailUrl}
                      data-tooltip-target="tooltip-mailUrl"
                      data-tooltip-trigger="hover"
                      data-tooltip-placement="top"
                      className=" flex items-center p-3 text-base font-bold rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 "
                    >
                      <ToolTip id="tooltip-mailUrl">
                        Click to send an email
                      </ToolTip>
                      <BsEnvelopeFill />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Shoot me an email
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={githubUrl}
                      data-tooltip-target="tooltip-github"
                      data-tooltip-trigger="hover"
                      data-tooltip-placement="top"
                      className="h-12 flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 "
                    >
                      <ToolTip id="tooltip-github">
                        Click to see my github
                      </ToolTip>
                      <BsGithub />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Github
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={telegramUrl}
                      data-tooltip-target="tooltip-telegram"
                      data-tooltip-trigger="hover"
                      data-tooltip-placement="right"
                      className="flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 "
                    >
                      <ToolTip id="tooltip-telegram">
                        Click to send a telegram message
                      </ToolTip>
                      <BsTelegram />
                      <span className="flex-1 ml-3 whitespace-nowrap">
                        Telegram
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="dark:text-midnight-blue">
                  For phone number inquires, request by email.
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}