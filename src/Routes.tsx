import { useRoutes } from "react-router-dom";
import { NotFound } from "./components/NotFound";

export default function Routesapp(){

    const routes = useRoutes([
        { path: '/', element: <div>index aqui</div> },
        { path: '/dois', element: <div>Dois</div> },
        { path: '*', element: <NotFound/> },
    ])
    
    return routes;    
}