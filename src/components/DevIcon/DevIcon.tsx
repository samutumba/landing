import { DevEnvironments, Language, StackType, Tool } from "../../interfaces";

interface DevIconProps {
    stack: StackType | DevEnvironments
    size?: String,

}
 
export const DevIcon: React.FC<DevIconProps> = ({
    stack,
    size
}) => {

    let sizeSet:boolean = false;


    if (size !== undefined){
        sizeSet = true;
    }
   

    return (
        <div className={"dark:text-white text-gray-900 text-center align-middle " + (sizeSet? " text-"+size+"": " text-6xl") }>
            <SetIcon icon={stack} />
        </div>
    );
}

interface IIconProps {
    icon: StackType | DevEnvironments
}

const SetIcon: React.FC<IIconProps> = ({
    icon
}) => {
    // Select Icon
    switch (icon) {
        case Language.JS:
            return ( <i className="devicon-javascript-plain"></i> );
        case Language.Java:
            return (<i className="devicon-java-plain-wordmark "></i>);
        case Language.CS:
            return ( <i className="devicon-csharp-plain"></i>); 
        case Language.CPP:
            return ( <i className="devicon-cplusplus-plain"></i>);
            
        case Language.Bash:
            return ( <i className="devicon-bash-plain"></i>);
            
        case Language.PHP:
            return ( <i className="devicon-php-plain"></i>);
            
        case Language.CSS:
            return ( <i className="devicon-css3-plain-wordmark"></i>);
            
        case Language.HTML:
            return ( <i className="devicon-html5-plain-wordmark"></i>);
            
        case Language.PY:
            return (<i className="devicon-python-plain-wordmark"></i>);
            
        case Language.SQL:
            return (<i className="bi bi-file-earmark-spreadsheet "></i>);
            
        case Tool.NodeJS:
            return (<i className="devicon-nodejs-plain"></i>);
            
        case Tool.Angular:
            return (<i className="devicon-angularjs-plain"></i>);
            
        case Tool.JQ:
            return (<i className="devicon-jquery-plain-wordmark"></i>);
            
        case Tool.React:
            return (<i className="devicon-react-original-wordmark"></i>);
            
        case Tool.BootStrap:
            return (<i className="devicon-bootstrap-plain-wordmark"></i>);
            
        case Tool.Tailwind:
            return (<i className="devicon-tailwindcss-plain"></i>);
            
        case Tool.Express:
            return (<i className="devicon-express-original"></i>);
            
        case Tool.dotNet:
            return (<i className="devicon-dot-net-plain-wordmark"></i>);
            
        case Tool.dotNetCore:
            return (<i className="devicon-dotnetcore-plain"></i>);
            
        case Tool.Laravel:
            return (<i className="devicon-laravel-plain-wordmark"></i>);
            
        case Tool.Ruby:
            return (<i className="devicon-ruby-plain-wordmark"></i>);
            
        case Tool.Spring:
            return (<i className="devicon-spring-plain-wordmark"></i>);
            
        case DevEnvironments.Atom:
            return (<i className="devicon-atom-original"></i>);
            
        case DevEnvironments.VSCode:
            return ( <i className="devicon-vscode-plain-wordmark"></i>);
            
        case DevEnvironments.VSEnt:
            return ( <i className="devicon-visualstudio-plain"></i>);
            
        case DevEnvironments.Linux:
            return ( <i className="devicon-linux-plain"></i>);
            
        case DevEnvironments.Apache:
            return ( <i className="devicon-apache-plain-wordmark"></i>);
            
        case DevEnvironments.PgSQL:
            return ( <i className="devicon-postgresql-plain-wordmark"></i>);
            
        case DevEnvironments.MySQL:
            return ( <i className="devicon-mysql-plain"></i>);
            
        case DevEnvironments.SQLServer:
            return ( <i className="devicon-microsoftsqlserver-plain-wordmark"></i>);
            
        case DevEnvironments.PyCharm:
            return ( <i className="devicon-pycharm-plain"></i>);
            
        case DevEnvironments.CodePen:
            return ( <i className="devicon-vscode-plain-wordmark"></i>);
        case Tool.GraphQL:
            return (<i className="devicon-graphql-plain-wordmark"></i>);
        case Language.Type:
            return (<i className="devicon-typescript-plain"></i> );
        case Tool.NextJS:
            return(<i className="devicon-nextjs-plain-wordmark"></i>);
        case DevEnvironments.MongoDB:
            return(<i className="devicon-mongodb-plain-wordmark"></i>);
        case Language.XAML:
            return(<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="inline-block" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.391 1.537a.785.785 0 0 0-.679.392L.106 11.607a.785.785 0 0 0 0 .786l5.606 9.678a.785.785 0 0 0 .68.392h11.217c.28 0 .538-.15.679-.392l5.606-9.678a.785.785 0 0 0 0-.786l-5.606-9.678a.785.785 0 0 0-.68-.392zm.03.837h10.542l-5.209 9.211H5.968l4.72-8.174a.13.13 0 0 0-.114-.196l-3.068-.002a.262.262 0 0 0-.226.13l-4.764 8.243h-1.43zm11.333.303l5.4 9.323l-5.371 9.274l-5.299-9.279zm.171 2.825a.13.13 0 0 0-.113.066l-1.519 2.69a.262.262 0 0 0 .002.259l1.943 3.36a.262.262 0 0 1 0 .262l-1.927 3.338a.262.262 0 0 0 0 .26l1.526 2.675a.13.13 0 0 0 .227 0l3.55-6.143a.523.523 0 0 0 0-.524L18.04 5.567a.13.13 0 0 0-.114-.065zM1.09 12.422h1.436l4.764 8.232a.262.262 0 0 0 .226.13l3.072.002a.13.13 0 0 0 .113-.196L5.98 12.422h5.784l5.256 9.204H6.421z"/></svg>);
        default:
            return (<i className="bi bi-file-code-fill "></i>);
    }
    
}
