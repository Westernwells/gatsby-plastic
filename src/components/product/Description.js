import React from 'react'
import Styled from 'styled-components'
import Img from '../../images/pro1.jpg'
const DescRow = Styled.div`
width:100%;
background-color:${props=>props.theme.primary};
display:grid;
grid-template-columns: repeat(2, 600px);
grid-column-gap:20px;
justify-content:center;
`;

const Image = Styled.img`
width:600px;
height:400px;
`;
const DescTableCon = Styled.div`
display:flex;
flex-direction:column;
background-color:white;
padding:20px;
.desc-header{
  font-size:1.3rem;
  font-weight:400;
  margin-top:0.5rem;
  margin-bottom:1rem;
}

`;
const DescTable = Styled.table`
table-layout: fixed;
  width: 100%;
  border: 5px solid ${props=>props.theme.primary};
  
   th,
 td {
  border: solid 3px ${props=>props.theme.primary};
  border-collapse: collapse;
  padding:5px;

}
.til{
  font-size:1.2rem;
  font-weight:500;
}
.tdd{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
`;
const Description =()=>{
    return(
        <DescRow>
        <Image src={Img} alt="img" />
        <DescTableCon >
        <p className="desc-header">Description</p>
        <DescTable>
        <tbody>
        {/**Another One */}
        <tr className="">
        <td className="til">Product Model</td>
        <td className="">1200 -1000</td>
        </tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
1200 X !000 X 1000
<span className="tds">mm</span>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
1200 X !000 X 1000
<span className="tds">mm</span>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
<p className="tdl">1200 X !000 X 1000</p>
<small className="tds">mm</small>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
<p className="tdl">1200 X !000 X 1000</p>
<small className="tds">mm</small>
</td>
</tr>
        </tbody>
        </DescTable>
        </DescTableCon>
        </DescRow>
    )
}

export default Description;