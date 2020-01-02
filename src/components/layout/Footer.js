import React from 'react'
import Styled from 'styled-components'

const FooterRow = Styled.div`
background-color:white;
padding:10px;

.footer-text{
    text-align:center;
    color:${props=>props.theme.primary};
}
`;

export default function Footer() {
    return (
        <FooterRow>
           <p className="footer-text">All Right Reserved A PlasticBox</p> 
        </FooterRow>
    )
}
