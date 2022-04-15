import {AiFillHeart} from 'react-icons/ai';
import styled from 'styled-components';


const FooterStyles = styled.footer`

    background-color: #11314a;
    margin: 0 auto;
    text-align: center;
    padding: 9px 0px;
    
    p{
        font-size: 10px;
        color: var(--white-color)
    }
    
`


export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <FooterStyles>
            <p>All Right Are Reserved @ {date} By Mohamed Salah with <AiFillHeart/> </p>
        </FooterStyles>
    )
}
