import { useRoutes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Skills from "./pages/Skills";
import { Contact } from "./pages/Contact";

export default function Routesapp(){

    const routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/skills', element: <Skills/> },
        { path: '/contact', element: <Contact/> },
        { path: '*', element: <NotFound/> },
    ])
    
    return routes;    
}