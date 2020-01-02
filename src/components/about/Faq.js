import React from 'react'
import Styled from 'styled-components';
const FaqSec = Styled.div`
width:98%;
margin:20px auto;
background-color:white;
color:${props=>props.theme.primary};
padding:10px 0;

.faq-header{
    font-size:1.5rem;
    font-weight:bold;
    border-bottom:solid ${props=>props.theme.primary} 5px;
    line-height:1rem;
    display:inline-block;
    position:relative;
    
    left:50%;
    transition:translateX(-50%);
    }
    .faq{
background-color:${props =>props.theme.primary};
color:white;
margin:10px 0;
border-radius:5px;
padding:0.5rem 1rem;
    }
    .fq{
font-size:1.5rem;
font-weight:bold;
    }
    .fa{
        font-size:1rem;
        color:white;
    }

`;


const Faq = ()=>{
    return(
        <FaqSec>
        <p className="faq-header">FAQs</p>
        {/*Another One */}
        <div className="faq">
        <p className="fq">Are you a factory, is custom service available?</p>
        <p className="fa">Yes, we are a factory based in Shanghai, China and authenticated by TUV.</p>
        </div>
        {/*Another One */}
        <div className="faq">
        <p className="fq">Are you a factory, is custom service available?</p>
        <p className="fa">Yes, we are a factory based in Shanghai, China and authenticated by TUV.</p>
        </div>
        {/*Another One */}
        <div className="faq">
        <p className="fq">Are you a factory, is custom service available?</p>
        <p className="fa">Yes, we are a factory based in Shanghai, China and authenticated by TUV.</p>
        </div>
        {/*Another One */}
        <div className="faq">
        <p className="fq">Are you a factory, is custom service available?</p>
        <p className="fa">Yes, we are a factory based in Shanghai, China and authenticated by TUV.</p>
        </div>
        </FaqSec>
    )
}

export default Faq;