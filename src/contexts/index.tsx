import { ContextThemeProvider } from './ContextTheme';

export default function Globalcontext({children}:any){
    return(
        <ContextThemeProvider>
            {children}
        </ContextThemeProvider>
    )
}