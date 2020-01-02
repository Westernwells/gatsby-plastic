import React from 'react'
import Styled from 'styled-components';

const Mini = Styled.div`
.landa {
    background-image:"";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    color: #fff;
}
.landa:after {
    background-color: rgba(8,9,58,.6);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    height: 45vh;
}
.back {
    background-color: rgba(14,15,29,.6);
    width: 60%;
    height: 94%;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
`;
const MiniMap =()=>{
    return(

    )
}