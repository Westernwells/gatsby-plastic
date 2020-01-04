import React from 'react'
import Styled from 'styled-components';
import Img1 from '../../images/pro1.jpg'
import Img2 from '../../images/pro2.jpg'
import Img3 from '../../images/pro3.jpg'
import Img4 from '../../images/pro4.jpg'
import Img5 from '../../images/pro5.jpg'
// import Image from '../../image/
const CardRow = Styled.div`
display:grid;
grid-template-columns:200px 330px;
grid-column-gap:10px;
justify-content:center;
align-items:center;
background-color:white;
width:570px;
margin:20px auto;
border-radius:5px;
box-sizing:border-box;
padding:5px;

`;
const Image = Styled.img`
width:200px;
height:300px;
`;
const TableRow =Styled.div`
.prod-title{
    display:flex;
    justify-content:space-around;
    background-color:${props=>props.theme.primary};
    color:white;
    padding:5px 10px 5px 10px;
    margin:0 0 10px 0;
    justify-content:space-between;
}
.title{
font-size:1.4rem;
font-weight:bold;
}
.model{
    align-self:flex-end;
    font-size:0.9rem;
}
`;
const DescTable = Styled.table`
table-layout: fixed;
height:inherit;
  width: 100%;
  border: 5px solid ${props=>props.theme.primary};
  
   th,
 td {
  border: solid 3px ${props=>props.theme.primary};
  border-collapse: collapse;
  padding:5px;

}
th{
  vertical-align:middle;
}

.syv{
  border-right:none;
  text-align:left;
  font-size:0.9rem;
}
.syn{
  border-left:none;
  text-align:right;
  width:20px;
}
`;
const ReqBtn = Styled.button`
width:100%;
padding:10px 0;
text-align:center;
font-size:1.3rem;
font-weight:500;
background-color:${props=>props.theme.primary};
color:white;
border:none;
border-radius:5px;
box-shadow:none;
margin:5px auto;
`;
const ProductCard = () =>{
    return(
        <CardRow>
        <Image src={Img1} />
        <CardTable/>
        </CardRow>
    )
}

const CardTable =()=>{
    return(
        <TableRow className="">
        <div className="prod-title">
        <p className="title">Pallete In Plastic</p>
        <p className="model">Model 1200 - 1400</p>
        </div>
        <DescTable>
        <tbody>
    {/**Another one  External*/}
    <tr>
      <th class="tg-0lax" rowspan="2">External Dimension<br />(L x W x T)</th>
      <td class="syv">1200 X 1000 X 1000</td>
      <td class="syn">mm</td>
      </tr>
      <tr>
      <td class="syv">47.24 X 39.37 X 39.37</td>
      <td class="syn">in</td>
    </tr>
   {/**Another one  Internal*/}
   <tr>
   <th class="tg-0lax" rowspan="2">Internal Dimension<br />(L x W x T)</th>
   <td class="syv">1200 X 1000 X 1000</td>
   <td class="syn">mm</td>
   </tr>
   <tr>
   <td class="syv">47.24 X 39.37 X 39.37</td>
   <td class="syn">in</td>
   </tr>
   {/**Another one  Weight*/}
   <tr>
   <th class="tg-0lax" rowspan="2">Weight</th>
   <td class="syv">1200 X 1000 X 1000</td>
   <td class="syn">mm</td>
   </tr>
  <tr>
  <td class="syv">47.24 X 39.37 X 39.37</td>
  <td class="syn">in</td>
  </tr>
  {/**Another one  Volume*/}
  <tr>
    <th class="tg-0lax" rowspan="2">Volume</th>
    <td class="syv">1200 X 1000 X 1000</td>
    <td class="syn">mm</td>
  </tr>
  <tr>
  <td class="syv">47.24 X 39.37 X 39.37</td>
  <td class="syn">in</td>
  </tr>
  </tbody>
  
  
  </DescTable>
  <ReqBtn>Request Free Quote</ReqBtn>

  </TableRow>
  )
}



export default ProductCard;