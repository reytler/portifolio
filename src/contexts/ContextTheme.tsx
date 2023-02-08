import { createContext, useContext, useState } from 'react';
import { dark } from '../assets/styles/themes/default';
import { light } from '../assets/styles/themes/light';
import { DefaultTheme } from '../types';

type TContextTheme = {
    toogleTheme: ()=>void;
    theme: {};
}

export const ContextTheme = createContext({} as TContextTheme)

export function ContextThemeProvider({children}:any){

    const [theme, setTheme] = useState(dark);

    function toogleTheme(){
        setTheme(prev=>(prev === dark?light:dark))
    }

    return(
        <ContextTheme.Provider
            value={{
                toogleTheme,
                theme
            }}
        >
            {children}
        </ContextTheme.Provider>
    )
}

export function useTheme(){
    const context = useContext(ContextTheme);
    const {toogleTheme,theme} = context;
    return {toogleTheme,theme};
}