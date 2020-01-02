import React from 'react'
import {Link} from 'gatsby'
import Styled from 'styled-components'

const NavRow = Styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
background-color:${props => props.theme.primary};
/* padding:10px 20px; */
.logo{
    font-size:30px;
}

ul{
    display:flex;
    li{
        list-style:none;
        margin:0 10px;
        
    }
}
.link{
    color:white;
    text-decoration:none;
    font-size:16px;
}
`;

const Navbar = ()=>{
return(
    <NavRow>
    <p className="logo">Plastic Box</p>
    <div className="navlink">
    
    <ul>
    <li><Link className="link" to="/">Home</Link></li>
    <li><Link className="link" to="/product">Product</Link></li>
    <li><Link className="link" to="/about">About</Link></li>
    <li><Link className="link" to="/contact">Contact us</Link></li>
    </ul></div>
    </NavRow>
)

}
export default Navbar;