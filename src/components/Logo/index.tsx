import { Wrapper } from './styles';
import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <Link to={'/'}>
            <Wrapper>
                <img src="https://avatars.githubusercontent.com/u/47703164?s=400&u=0bebf5894479d20c267bb19999ff4f712a6ec709&v=4" alt="Reytler Souza" />
            </Wrapper>
        </Link>
    )
}