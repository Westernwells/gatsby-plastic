import React from 'react'
import Styled from 'styled-components';
import Img from '../../images/pro1.jpg'

const LandingRow = Styled.div`
    positon:relative;

.landa {
    background-image:url("../images/pro1.jpg");
    color: #fff;
    height:45vh;
}
/* .landa:after {
    background-color: rgba(8,9,58,0.6);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    height: 45vh;
} */

.land-body{
    dispaly:flex;
    align-items:center;
    justify-content:center;
    color:white;
}
.l-header{
    font-size:2rem;
    font-weight:bold;
    text-align:center;
}
.l-subHeader{
    font-size:1.5rem;
    font-weight:400;
    text-align:center;
}
`;
const Landing =(props)=>{
    return(
        <LandingRow>
        <div className="landa">
        <div className="land-body">
        <p className="l-header">{props.header}</p>
        <p className="l-subHeader">{props.subHeader}</p>
        {props.children}
        </div>
        </div>
        </LandingRow>
    )
}
export default Landing;