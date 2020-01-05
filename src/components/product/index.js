import React from 'react'
import Styled from 'styled-components'
import Description from './Description'
import Related from './Related'
import SecNav from '../layout/SecNav'
const ProdRow =Styled.div`
background-color:white;
`;
const index =()=>{
    return(
<ProdRow>
{/**Description here */}
<SecNav />
<Description />
<Details/>
{/**Related here */}
<Related/>
</ProdRow>
    )
}


const DetSec = Styled.div`
background-color:white;
color:${props=>props.theme.primary};
/* width:100%; */
padding:20px; 
.det-header{
font-size:1.5rem;
font-weight:bold;
margin-bottom:0.7rem;
  border-bottom:solid 3px ${props =>props.theme.primary};
  display:inline-block;
  line-height:1.4;
  /* width:100px; */
}
.det-det{
font-size:1.2rem;
}
`;
const Details =()=>{
    return(
        <DetSec>
        <p className="det-header">Details</p>
        <p className="det-det">Pallets in Container is a foldable plastic storage container that comes with a pallet and a lid. The body can be folded into a flat unit, saving you space. The container pallets gives you an advantage to use it straight away since it does not not need an extra pallet when loading it. When assembled it has a weight of 30kg and a volume of 973L.
        </p>
        </DetSec>
    )
}

export default index;