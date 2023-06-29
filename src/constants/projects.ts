import { DevEnvironments, Language, ManyProjectsType, ProjectType, Tool } from "../interfaces"
import { CardsPic, YellowLogo } from "./images"

export const completedProjects: string = ""

/**Projects That I have completed */
export const myProjects: ManyProjectsType = [
    {
        title: "Personal Website",
        coverImage: YellowLogo,
        type: ProjectType.Ind,
        description: `To put a face to my skills as a Web Developer I designed and built this site for my portfolio to kickstart the gallery of my personal work. \n This site is built using a React & Tailwind front-end and a back end of NodeJS and Express all written in Typescript. `,
        links: {
            url: "https://samutumba.com",
            github : "https://github.com/samutumba/landing",
        },
        language: [Language.Type, Tool.React, Tool.Tailwind, Tool.NodeJS, Tool.Express],
        environment: [DevEnvironments.VSCode, DevEnvironments.Netlify],
    },
    {
        title: "Crazy Eights Card Game",
        coverImage: CardsPic,
        type: ProjectType.Group,
        description: `Crazy Eights is a popular standard card game that can be played by 2 to 5 players. Using Object Oriented Principles, me and my school group mates embarked on replicating the live experience through the use of .Net Framework Tools. The game is generated in XAML and the logic behind the game is handled using CSharp Classes. Features include; Record Keeping handled by and mdf file database and Microsoft Entity Framework, Multi player gaming and Statistics. `,
        links: {
            file: "https://drive.google.com/uc?export=download&id=1n68PTevCyTr21ojcdc8giYBJ3PT25t3Z",
        },
        language: [Language.CS, Tool.dotNetCore, Language.XAML],
        environment: [DevEnvironments.VSEnt],
    },
    {
        title: "Canada National Soccer Association",
        coverImage: "https://cnsa.samutumba.com/_next/image?url=%2FSoccerlogo.png&w=828&q=75",
        type: ProjectType.Group,
        description: `Assignment for Database Development II in Durham College's Computer Programming and Analysis Program. Durham College This is a proposed system for record keeping and scouting to improve the infrastructure of Canadian Soccer within the University and High School leagues `,
        links: {
            url: "https://cnsa.samutumba.com",
            github: "https://github.com/samutumba/canada-national-soccer-association"
        },
        language: [Language.Type, Tool.NextJS, Language.SQL,],
        environment: [DevEnvironments.VSCode],
    },
    
]