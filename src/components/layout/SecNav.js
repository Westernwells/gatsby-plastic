import React from 'react'
import {Link} from 'gatsby'
import Styled from 'styled-components'

const NavRow = Styled.div`
/* width:100%; */
display:flex;
justify-content:space-between;
align-items:center;
color:${props => props.theme.primary};
background-color:white;
-webkit-box-shadow: 0px 5px 5px 0px rgba(242,230,242,1);
-moz-box-shadow: 0px 5px 5px 0px rgba(242,230,242,1);
box-shadow: 0px 5px 5px 0px rgba(242,230,242,1);
margin-bottom:5px;
padding:10px 20px;

ul{
    display:flex;
    li{
        list-style:none;
        margin:0 10px;
        
    }
}
.no-margin{
    margin:0;
}
.link{
    color:white;
    text-decoration:none;
    font-size:16px;
}
.pri{
    color:${props =>props.theme.primary};
    text-decoration:none;
    font-size:16px;
    font-weight:700;
}
.sec{
    color:${props =>props.theme.primary};
    text-decoration:none;
    font-size:16px;
    font-weight:600;
}
.ter{
    color:${props =>props.theme.primary};
    text-decoration:none;
    font-size:16px;
    font-weight:500;
}
`;

const SecNav = (props)=>{
    const {pri,sec,tert} = props;
return(
    <NavRow>
    <div className="navlink">
    
    <ul>
    <li><Link className="pri" to="/">Home</Link></li>
    <li className="no-margin"><Link className="sec " to="/product">&gt;</Link></li>

    <li><Link className="sec" to="/product">Product</Link></li>
    {tert && <>
        <li className="no-margin"><Link className="sec " to="/product">&gt;</Link></li>

        <li><Link className="ter" to="/about">&gt;  About</Link></li> 
        </>
    }
    </ul></div>
    </NavRow>
)

}
export default SecNav;