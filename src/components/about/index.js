import React from 'react'
import Styled from 'styled-components'
import Faq from './Faq'
import Services from '../home/Services'
import Landing from '../landing/index'
const AboutCon = Styled.div`
width:100%;
.mini{

}
`;
const Who = Styled.div`
width:98%;
margin:0 auto;
padding:20px 0;
background-color:${props => props.theme.primary};
color:white;
.who-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin:1rem; 0;
}
.who-text{
    text-align:center;
}
`;

const Choose = Styled.div`
background-color:${props=>props.theme.primary};
color:white;
width:98%;
margin:0 auto;
padding:20px 0;
.choose-header{
    font-weight:bold;
    font-size:1.5rem;
    text-align:center;
    margin:1rem; 0;
    
}
.opts{
    display:grid;
    grid-template-columns:repeat(4,200px);
    justify-content:center;
    grid-column-gap:50px;
}
.opt{
    background-color:white;
    color:${props=>props.theme.primary};
    padding:10px;
    border-radius:10px;
    width:200px;
}
.opt-header{
font-weight:bold;
font-size:1.3rem;
text-align:center;
}
.opt-body{
font-weight:normal;
font-size:1rem;
text-align:center;
}
`;

const Customer = Styled.div`
width:98%;
margin:0 auto;
padding:20px 0;
border-top:solid white 5px;
border-bottom:solid white 5px;

background-color:${props=>props.theme.primary};
color:white;
.cus-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    margin:1rem 0;
}
.cuses{
    display:grid;
    grid-template-columns:repeat(6,100px)
    grid-column-gap:35px;
    justify-content:center;
}
.cus{
    width:100px;
    height:50px;
}
`;

const index =() =>{
    return(
        <AboutCon>
        <Landing/>
        <div className="mini">
        <Who>
        <p className="who-header">Who We Are</p>
            <p className="who-text">JOINPLASTIC Company is a Chinese Company, specializing in developing and producing logistic handling materials. Our main products are industrial plastic boxes, which can be classified into three parts; Stackable Boxes, Nestable-Stackable Boxes and Collapsible boxes. We also manufacture plastic turnover boxes that has a strong technical force. Our good quality products, reasonable prices and modern product designs make your logistic packing and personal storage easier. These products are extensively used by logistic firms and moving firm among the long list of other firms. Our products modern design allows these products to continuously meet the ever changing economic and social needs. Our products are widely recognized and trusted by all users all-around the globe.</p>
            </Who>
            <Services />
            <Choose>
            <p className="choose-header">
            Why Choose Us
            </p>
            <div className="opts">
            {/*Another One */}
            <div className="opt">
            <p className="opt-header">Raw Material</p>
            <p className="opt-body">100% virgin PP/PE,<br />
            Eco-firendly</p>
            </div>
                {/*Another One */}
                <div className="opt">
                <p className="opt-header">Raw Material</p>
                <p className="opt-body">100% virgin PP/PE,<br />
                Eco-firendly</p>
                </div>   
                 {/*Another One */}
                <div className="opt">
                <p className="opt-header">Raw Material</p>
                <p className="opt-body">100% virgin PP/PE,<br />
                Eco-firendly</p>
                </div>  
                  {/*Another One */}
                <div className="opt">
                <p className="opt-header">Raw Material</p>
                <p className="opt-body">100% virgin PP/PE,<br />
                Eco-firendly</p>
                </div>
                </div>
                </Choose>
                <Customer>
                <p className="cus-header">
                Our Customers
                </p>
                <div className="cuses">
                <p className="cus">Google</p></div>
                </Customer>
                <Faq />
                </div>
                </AboutCon>
    )
}

export  default index;