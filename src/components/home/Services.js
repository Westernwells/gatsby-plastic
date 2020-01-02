import React from 'react'
import Styled from 'styled-components'
const ServSec=Styled.div`
width:100%;
background-color:white;
margin:20px 0;
.mini{
    width:90%;
    margin:0 auto;
}
.serv-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    color:${props=>props.theme.primary};
}
.serv-row{
    display:grid;
    grid-template-columns:repeat(3, 250px);
    justify-content:center;
    grid-column-gap:50px;
    margin:10px 0;

}
.service{
    border-radius:5px;
    width:250px;
    padding:10px ;
    -webkit-box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
-moz-box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
box-sizing:border-box;

}
.serv-logo{
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:${props=>props.theme.primary};
    color:white;
    padding:5px 10px 10px 10px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    margin-bottom:10px;


}
.serv-icon{
    color:white;
    font-size:1.5rem;
    text-align:center;
    font-weight:bold;
}
.serv-title{
    font-weight:bold;
    text-align:center;
    font-size:1.3rem;
    color:${props =>props.theme.primary}
    margin-top:10px;
    margin-bottom:10px;
}
.serv-body{
    font-weight:400;
    text-align:center;
    font-size:1.1rem;
    color:${props =>props.theme.primary}
    margin-top:10px;
    margin-bottom:10px;
    
}
.serv-btn{
    color:white;
    background-color:${props =>props.theme.primary};
    padding:8px 16px;
    border-radius:5px;
    font-size:1.4rem;
    margin:0 auto;
    text-align:center;
    position:relative;
    left:50%;
    transform:translateX(-50%);
    border:transparent;
    margin-top:10px;
    margin-bottom:10px;
}
.servicex{
    border-radius:5px;
    width:250px;
    background-color:${props=>props.theme.primary};
    padding:10px ;
    -webkit-box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
-moz-box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
box-shadow: 0px 10px 5px 2px rgba(230,223,230,1);
box-sizing:border-box;

}
.serv-logox{
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:white;
    color:${props=>props.theme.primary};
    padding:5px 10px 10px 10px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:10px;
    margin-bottom:10px;

}
.serv-iconx{
    color:${props=>props.theme.primary};
    font-size:1.5rem;
    text-align:center;
    font-weight:bold;
}
.serv-titlex{
    font-weight:bold;
    text-align:center;
    font-size:1.3rem;
    color:white;
    margin-top:10px;
    margin-bottom:10px;
}
.serv-bodyx{
    font-weight:400;
    text-align:center;
    font-size:1.1rem;
    color:white;
    margin-top:10px;
    margin-bottom:10px;
    
}
.serv-btnx{
    color:${props =>props.theme.primary};
    background-color:white;
    padding:8px 16px;
    border-radius:5px;
    font-size:1.4rem;
    margin:0 auto;
    text-align:center;
    position:relative;
    left:50%;
    transform:translateX(-50%);
    margin:0 auto;
    margin-top:10px;
}
`;


const Services = ()=>{
    return(
<ServSec>
<p className="serv-header">
Our Services
</p>
<div className="serv-row">
{/**Another One */}
<div className="service">
<div className="serv-logo">
<p className="serv-icon">C</p>
</div>
<p className="serv-title">Customization</p>
<p className="serv-body">
Some quick example text to build on the card title and make up the bulk the cards content
</p>
<button className="serv-btn">Customize</button>
</div>
{/**Another One */}
<div className="servicex">
<div className="serv-logox">
<p className="serv-iconx">C</p>
</div>
<p className="serv-titlex">Customization</p>
<p className="serv-bodyx">
Some quick example text to build on the card title and make up the bulk the cards content
</p>
<button className="serv-btnx">Customize</button>
</div>
{/**Another One */}
<div className="service">
<div className="serv-logo">
<p className="serv-icon">C</p>
</div>
<p className="serv-title">Customization</p>
<p className="serv-body">
Some quick example text to build on the card title and make up the bulk the cards content
</p>
<button className="serv-btn">Customize</button>
</div>
</div>
</ServSec>
    )
}
export default Services;