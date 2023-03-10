import { HiOutlineMinus } from 'react-icons/hi';
import styled from 'styled-components'

const Wrapper = styled.span<{grade: number}>`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin: 30px;
    width: 30px;

    .first {
        transform: rotate(${({grade})=>grade}deg);
        margin-bottom: ${({grade})=>grade === 45 ? -30 : -25}px;
        font-size: 30px;
        transition: all .2s ease-in;
    }

    .second {
        transform: rotate(-${({grade})=>grade}deg);
        font-size: 30px;
        transition: all .2s ease-in;
    }
`;

const Container = styled.span`
    display: none !important;
    @media (max-width: 767px) {
        display: block !important;
    }
`;

export default function MenuIcon({toogleMenu, grade}:any){
    return(
        <Container>
            <Wrapper grade={grade} onClick={()=>toogleMenu()}>
                <HiOutlineMinus className='first'/>
                <HiOutlineMinus className='second'/>
            </Wrapper>
        </Container>
    )
}