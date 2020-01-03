import React from 'react'
import Styled from 'styled-components';
import Img1 from '../../images/pro1.jpg'
const OcRow = Styled.div`
width:100%;
background-color:rgba(8,9,58,0.7);
padding:10px 0;

.oc-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin:10px 0;
    color:white;
}

.customers{
    display:grid;
    grid-template-columns:repeat(6,150px);
    grid-column-gap:30px;
    justify-content:center;
}
.cus{
position:relative;
/* height:200px; */
width:150px;
}

.cus-image{
    width:150px;
    height:100px;
}

.title{
    font-size:1.2rem;
    font-weight:500;
    text-align:center;
    color:white;
}
`;

const OurCustomers = ()=>{
    return(
        <OcRow>
        <p className="oc-header">Our Customers</p>
        <div className="customers">
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
         {/**Another One */}
         <div className="cus">
        <img src={Img1} className="cus-image">
        </img>
        <p className="title">
        Pallet in Container
        </p>
        </div>
        </div>
        </OcRow>
    )
}
export default OurCustomers;