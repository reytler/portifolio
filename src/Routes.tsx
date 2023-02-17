import { useRoutes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import Skills from "./pages/Skills";

export default function Routesapp(){

    const routes = useRoutes([
        { path: '/', element: <Home/> },
        { path: '/skills', element: <Skills/> },
        { path: '/contact', element: <div>Contact</div> },
        { path: '*', element: <NotFound/> },
    ])
    
    return routes;    
}