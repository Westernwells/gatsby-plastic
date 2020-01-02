import React from 'react'
import Styled from 'styled-components'

const WpRow = Styled.div`
width:100%;
background-color:white;
color:${props =>props.theme.primary};
.wp-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
}
.p-row{
    display:grid;
    grid-template-columns:repeat(3,300px);
    grid-column-gap:30px;
    justify-content:center;
}
.prov-body{
    display:flex;
    justify-content:center;
    align-items:center;

}
.prov-header{
fot-size:1.2rem;
font-weight:bold;
}
.prov-image{
height:250px;
width:300px;
}
.prov-text{
text-align:center;
}
`;
const WeProvide = ()=>{
    return(
<WpRow>
<p className="wp-header">We Provide Crates And Boxes For</p>
<div className="p-row">
{/*ANother one*/}
<div className="prov-body">
<p className="prov-header">Moving Company</p>
<image className="prov-image" src="" alt="Product Image"></image>
<p className="prov-text">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
</div>
{/*ANother one*/}
<div className="prov-body">
<p className="prov-header">Moving Company</p>
<image className="prov-image" src="" alt="Product Image"></image>
<p className="prov-text">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
</div>
{/*ANother one*/}
<div className="prov-body">
<p className="prov-header">Moving Company</p>
<image className="prov-image" src="" alt="Product Image"></image>
<p className="prov-text">Retailers can enjoy the high quality and competitive price of our plastic products,and we had build a good relationship with retails across the world</p>
</div>
</div>
</WpRow>

    )
}

export default WeProvide;
