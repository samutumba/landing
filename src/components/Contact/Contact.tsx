import React from "react";
import { githubUrl, linkedInUrl, mailUrl, telegramUrl } from './../../constants';

export const Contact = () => {
    return (
        <>
            <button type="button" data-modal-toggle="contactModal" className ="block dark:text-midnight-blue text-tint-blue mx-auto dark:bg-sun bg-gold dark:hover:bg-iron hover:bg-midnight-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center " >
                    Contact
            </button>
    
            <div id="contactModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">                         
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        
                    <div className="relative  rounded-lg shadow bg-gray-200">

                        <div className="flex justify-between items-center py-4 px-6 rounded-t border-b border-gray-600">
                            <h3 className="text-base font-semibold  lg:text-xl text-midnight-blue font-title">
                                Feel Free to Contact
                            </h3>
                            <button type="button" className="text-midnight-blue bg-transparent  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white" data-modal-toggle="contactModal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
    
                        <div className="p-6">
                            <p className="text-sm font-normal  text-gray-700">For job openings, to check out more of my work, discuss project ideas, give advice, lay comments or to connect using any one of these avenues</p>
                            <ul className="my-4 space-y-3 text-white">
                                <li>
                                    <a href={linkedInUrl} className="h-12 flex items-center p-3 text-base font-bold rounded-lg group hover:shadow bg-midnight-blue hover:bg-gray-500 ">
                                        <i className="bi bi-linkedin w-6 h-6"></i>
                                        <span className="flex-1 ml-3 whitespace-nowrap">LinkedIn</span>
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-bold rounded text-midnight-blue  dark:bg-sun bg-gold">Best</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={mailUrl} className=" flex items-center p-3 text-base font-bold rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 ">
                                    <i className="bi bi-envelope w-6 h-6"></i>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Shoot me an email</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={githubUrl} className="h-12 flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 ">
                                    <i className="bi bi-github w-6 h-6"></i>                           
                                    <span className="flex-1 ml-3 whitespace-nowrap">Github</span>
                                    </a>
                                </li>
                                <li>
                                    <a href={telegramUrl} className="flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow bg-midnight-blue hover:bg-gray-500 ">
                                        <i className="bi bi-telegram w-6 h-6"></i>
                                        <span className="flex-1 ml-3 whitespace-nowrap">Telegram</span>
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