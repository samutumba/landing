/** Project information */
export interface ProjectInterface {
    title: string,
    coverImage: string,
    images?: string[],
    type: ProjectType,
    description: any,
    links: {
        github?: string,
        url?: string,
        file?: string,
    }
    gallery?: string[],
    language: StackType[];
    environment: DevEnvironments[];
    apis?: APIs[];

}

export type ManyProjectsType = ProjectInterface[];

export interface MyProjects {
    projects: ManyProjectsType,

}

export type SingleProject = ProjectInterface;

/**Stack Type */
export type StackType = Language | Tool;

/**Programming Language */
export enum Language {
    JS = 'JavaScript',
    Java = 'Java',
    CPP = 'C++',
    CS = 'C#',
    COBOL = 'COBOL',
    PHP = 'PHP',
    PY = 'Python',
    HTML = "HTML5",
    CSS = 'CSS3',
    SQL = "SQL",
    Bash = "BASH",
    Type = "Typescript",
    XAML = "XAML",

}

export enum FileType {
    Docx = 'Document',
    Jpg = 'JPG',
    Jsx = "JSX",
    Png = 'PNG',
    Mp4 = "MP4",
    Json = "JSON",
    Txt = "Txt",
    Svg = "SVG",
    Pdf = "PDF",
    Gif = "GIF",
    Excel = "Excel",
    Zip = "Zipped Folder"

}

/**Frameworks and Plugins */
export enum Tool {
    NodeJS = "NodeJs",
    Angular = "AngularJs",
    JQ = "JQuery",
    React = "ReactJs",
    Ajax = "AJAX",
    BootStrap = "Bootstrap",
    Tailwind = "Tailwind",
    Express = "Express",
    dotNet = "dotNet",
    dotNetCore = ".Net Core",
    Laravel = "Laravel",
    Ruby = "Ruby",
    Spring = "Spring",
    NextJS = "NextJs",
    GraphQL = "GraphQL",
    
}

/**Development Platforms and environment */
export enum DevEnvironments {
    VSCode = 'Visual Studio Code',
    VSEnt = 'Visual Studio Enterprise',
    Atom = 'Atom',
    Linux = "Linux",
    Apache = "Apache",
    PgSQL = "PostGreSQL",
    MySQL = "MySQL",
    SQLServer = "SQL Server",
    NotePad = "NotePad++",
    PyCharm = "PyCharm Edu",
    CodePen = "CodePen",
    MongoDB = "MongoDB",
    Netlify = "Netlify",
    Heroku = "Heroku"

}

export enum APIs {
    Cloudinary = "Cloudinary",
    Mongoose = "Mongoose",
    Custom = "Custom Made API",
}

export enum ProjectType {
    Ind = "Individual",
    Group = "Group",
}