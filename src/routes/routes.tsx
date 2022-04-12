import { BrowserRouter , Route, Routes} from "react-router-dom";
import {
    NotFound,
    About,
    Home,
    Projects,
    Resume,
    Services
} from "../pages";

export const WebRoutes = () => {
    return (   
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={"/about"} element={<About/>} />
                <Route path={"/projects"} element={<Projects />} />              
                <Route path={"/resume"} element={<Resume />} />
                <Route path={"/services"} element={<Services />} />
                <Route element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </>  
    );
};
