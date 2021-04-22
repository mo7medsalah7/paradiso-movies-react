import {AiFillHeart} from 'react-icons/ai';
import styled from 'styled-components';


const FooterStyles = styled.footer`

    background-color: #11314a;
    margin: 0 auto;
    text-align: center;
    padding: 12px 0px;
    
    p{
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
