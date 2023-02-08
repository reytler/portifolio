import { useEffect, useState } from 'react';
import { useTheme } from '../../contexts/ContextTheme';
import { Wrapped } from './styles';

export default function Swicth(){
    const [right, setRight] = useState(true);
    const {toogleTheme}=useTheme();
    
    const toogle = ()=>{
        toogleTheme();
        setRight(prev=>!prev);
    };

    return(
        <Wrapped right={right}>
            <span className='content'>
                <span className='ball' onClick={()=>toogle()}/>
            </span>
        </Wrapped>
    )
}