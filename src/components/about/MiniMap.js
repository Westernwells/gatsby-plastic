import React from 'react'
import Styled from 'styled-components';
import Img1 from '../../images/pro1.jpg'
const Mini = Styled.div`
.landa {
    background-image:url(${Img1});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    color: #fff;
    position:relative;
    height: 35vh;

}
.landa:after {
    background-color: rgba(8,9,58,.6);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    content: "";
    height: 35vh;
}
.back {
    background-color: rgba(14,15,29,0.6);
    width: 60%;
    height: 60%;
    margin: 0 auto;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.m-text{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin:10px 0;
    line-height:1.5;
}
`;
const MiniBtn = Styled.button`
background-color:${props=>props.theme.primary};
padding:8px 16px;
color:white;
font-size:1.4rem;
font-weight:bold;
margin:10px 0;
outline:none;
border:none;

`;
const MiniMap =()=>{
    return(
<Mini>
<div className="landa">
        <div className="back">
        <p className="m-text">If You are interested in our Product and Services,<br />
 Don't Hesitate to Conatct us</p>
 <MiniBtn>Contact Us</MiniBtn>
        </div>

</div>
</Mini>
    )
}

export default MiniMap;