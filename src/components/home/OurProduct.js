import React from 'react'
import Styled from 'styled-components';

const OpRow = Styled.div`
width:100%;
background-color:rgba(8,9,58,0.7);

.op-header{
    font-size:1.5rem;
    font-weight:bold;
}

.prods{
    display:grid;
    grid-template-columns:repeat(3,300px);
    grid-column-gap:30px;
    justify-content:center;
}
.prod-body{
display:relative;
height:300px;
width:300px;
}

.prod-image{
    width:300px;
    height:300px;
}

prod-tilte{
    display:absolute;
    left:0;
    height:40px;
    bottom:40px;
    width:80%;
}
`;

const OurProducts = ()=>{
    return(
        <OpRow>
        <p className="op-header">Our Products</p>
        <div className="prods">
        {/**Another One */}
        <div className="prod">
        <image className="prod-image">
        </image>
        <div className="prod-title">Pallet in Container</div>
        </div>
         {/**Another One */}
         <div className="prod">
         <image className="prod-image">
         </image>
         <div className="prod-title">Pallet in Container</div>
         </div>
          {/**Another One */}
        <div className="prod">
        <image className="prod-image">
        </image>
        <div className="prod-title">Pallet in Container</div>
        </div>
        </div>
        </OpRow>
    )
}
export default OurProducts;