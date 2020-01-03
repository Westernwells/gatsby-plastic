import React from 'react'
import Styled from 'styled-components';
import Img1 from '../../images/pro1.jpg'
const OpRow = Styled.div`
width:100%;
background-color:rgba(8,9,58,0.7);
padding:10px 0;

.op-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin:10px 0;
    color:white;
}

.prods{
    display:grid;
    grid-template-columns:repeat(4,250px);
    grid-column-gap:30px;
    justify-content:center;
}
.prod-body{
position:relative;
height:300px;
width:250px;
}

.prod-image{
    width:250px;
    height:200px;
}

.prod-title{
    position:relative;
    left:0;
    height:40px;
    bottom:40px;
    width:80%;
    background-color:white;
    color:${props=>props.theme.primary};
    display:flex;
    justify-content:center;
    flex-direction:column;
    padding:0 5px;
}
.title{
    font-size:1.2rem;
    font-weight:600;
}
`;

const OurProducts = ()=>{
    return(
        <OpRow>
        <p className="op-header">Our Products</p>
        <div className="prods">
         {/**Another One */}
         <div className="prod">
        <img src={Img1} className="prod-image">
        </img>
        <div className="prod-title"><p className="title">
        Pallet in Container
        </p></div>
        </div>
        {/**Another One */}
        <div className="prod">
        <img src={Img1} className="prod-image">
        </img>
        <div className="prod-title"><p className="title">
        Pallet in Container
        </p></div>
        </div>
         {/**Another One */}
         <div className="prod">
         <img src={Img1} className="prod-image">
         </img>
         <div className="prod-title"><p className="title">
        Pallet in Container
        </p></div>
         </div>
          {/**Another One */}
        <div className="prod">
        <img src={Img1} className="prod-image">
        </img>
        <div className="prod-title">
        <p className="title">
        Pallet in Container
        </p>
        </div>
        </div>
        </div>
        </OpRow>
    )
}
export default OurProducts;