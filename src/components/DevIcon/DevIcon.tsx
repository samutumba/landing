import { DevEnvironments, Language, StackType, Tool } from "../../interfaces";
import { GoDatabase } from "react-icons/go";
import { GrMicrofocus } from "react-icons/gr";
import { DiDotnet, DiCode, DiMysql } from "react-icons/di";
import {
    SiGnubash,
    SiJava,
    SiJavascript,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiAngular,
  SiDotnet,
  SiExpress,
  SiJquery,
  SiHeroku,
  SiHtml5,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiXaml,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiBootstrap,
  SiLaravel,
  SiRuby,
  SiAtom,
  SiVisualstudiocode,
  SiVisualstudio,
  SiLinux,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiPycharm,
  SiCodepen,
  SiGraphql,
  SiApache,
} from "react-icons/si";

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
            return <SiJavascript />;

        case Language.Java:
            return <SiJava />;

        case Language.CS:
            return ( <SiCsharp />); 

        case Language.CPP:
            return ( <SiCplusplus />);
            
        case Language.Bash:
            return ( <SiGnubash />);
            
        case Language.PHP:
            return ( <SiPhp />);
            
        case Language.CSS:
            return ( <SiCss3 />);
            
        case Language.HTML:
            return ( <SiHtml5 />);
            
        case Language.PY:
            return (<SiPython />);
            
        case Language.SQL:
            return (<GoDatabase />);
            
        case Tool.NodeJS:
            return (<SiNodedotjs />);
            
        case Tool.Angular:
            return (<SiAngular />);
            
        case Tool.JQ:
            return <SiJquery />;
            
        case Tool.React:
            return (<SiReact />);
            
        case Tool.BootStrap:
            return (<SiBootstrap />);
            
        case Tool.Tailwind:
            return (<SiTailwindcss />);
            
        case Tool.Express:
            return (<SiExpress />);
            
        case Tool.dotNet:
            return <DiDotnet />;
            
        case Tool.dotNetCore:
            return (<SiDotnet />);
            
        case Tool.Laravel:
            return (<SiLaravel />);
            
        case Tool.Ruby:
            return (<SiRuby />);
            
        case Tool.Spring:
            return (<SiSpring />);
            
        case DevEnvironments.Atom:
            return (<SiAtom />);
            
        case DevEnvironments.VSCode:
            return ( <SiVisualstudiocode />);
            
        case DevEnvironments.VSEnt:
            return ( <SiVisualstudio />);
            
        case DevEnvironments.Linux:
            return ( <SiLinux />);
            
        case DevEnvironments.Apache:
            return ( <SiApache />);
            
        case DevEnvironments.PgSQL:
            return ( <SiPostgresql />);
            
        case DevEnvironments.MySQL:
            return <DiMysql />;
            
        case DevEnvironments.SQLServer:
            return ( <SiMicrosoftsqlserver />);
            
        case DevEnvironments.PyCharm:
            return ( <SiPycharm />);
            
        case DevEnvironments.CodePen:
            return <SiCodepen />;
        
        case DevEnvironments.Netlify:
            return <SiNetlify  />;

        case DevEnvironments.Heroku:
            return (<SiHeroku />);

        case Tool.GraphQL:
            return (<SiGraphql />);

        case Language.Type:
            return (<SiTypescript /> );

        case Tool.NextJS:
            return(<SiNextdotjs />);

        case DevEnvironments.MongoDB:
            return(<SiMongodb />);

        case Language.XAML:
            return(<SiXaml />);

        case Language.COBOL:
            return (<GrMicrofocus />);
        
        default:
            return (<DiCode />);
    }
    
}
