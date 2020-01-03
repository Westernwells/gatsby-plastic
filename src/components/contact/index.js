import React from 'react'
import Styled from 'styled-components'
import Landing from '../landing/index'

const TextInput = Styled.input`
border:solid 3px ${props=>props.theme.primary};
width:100%;
font-size:1rem;
padding:8px 5px;
/* display:inline-block; */

`;
const TextInputRowX = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
width:inherit;
margin:5px 0;
.label{
    color:${props=>props.theme.primary};
    font-weight:bold;
    font-size:1.2rem;
    /* display:block; */
    margin:5px 0;
}
`;
const CoRow = Styled.div`
display:grid;
grid-template-columns:60% 30%;
padding:0 20px;


`;

const CoForm =Styled.div`
.co-header{
    font-size:1.4rem;
    font-weight:bold;
    color:${props=>props.theme.primary};
    margin:10px 0;
}
.header{
    display:grid;
    grid-template-column:25% 1fr;
}
.header-l{
background-color:white;
}
.header-r{
    background-color:${props=>props.theme.primary};

}
`;

const DForm = Styled.div`
background-color:rgba(5,9,58,0.44);
padding:20px;
/* width:100%; */
.span{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-column-gap:40px;
    margin:5px 0;
    /* display:block; */
    /* width:inherit; */
    justify-content:space-between;

}
.notice{
    font-size:0.9rem;
    color:${props=>props.theme.primary};
}
`;
const CoLinks =Styled.div`
background-color:white;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

.location{
color:${props=>props.theme.primary}
font-size:1.3rem;
text-align:center;
}
.phone{
    color:${props=>props.theme.primary}
font-size:1.3rem;
text-align:center;

}
.email{
    color:${props=>props.theme.primary}
font-size:1.3rem;
border:solid 3px ${props=>props.theme.primary};
padding:5px 10px;
text-align:center;

}
`;


const TextArea = Styled.textarea`
width:100%;
cols:30;
rows:10;
resize:none;
outline:none;
height:70px;

`;

const SubmitBtn = Styled.button`
color:white;
padding:16px 10px;
border-radius:5px;
background-color:${props =>props.theme.primary};
border:none;
display:block;
width:100%;
font-size:1.2rem;
font-weight:bold;
margin:10px 0;
`;


const index = ()=>{
return(
    <>
    <Landing />

<CoRow>
<CoForm>
<p className="co-header">Make Enquiry</p>
<div className="header">
<div className="header-l">
</div>
<div className="header-r">
</div>
</div>
<DForm>
<div className="span">
<TextInputField label="First Name"/>
<TextInputField label="First Name"/>
</div>
<div className="span">
<TextInputField label="First Name"/>
<TextInputField label="First Name"/>
</div>
<TextArea />
<SubmitBtn>Submit</SubmitBtn>
<p className="notice">Email will be send to seller007@joinplastic.com, if you do not get email sent 
successful response,please alternatively Send email using your email client.</p>
</DForm>
</CoForm>
<CoLinks>
<p className="location">No 14, Omoniyi Abiri street,Tanke, Ilorin.</p>
<p className="phone">07087000894</p>
<p className="email">Rajiorazaq@gmail.com</p>
</CoLinks>
</CoRow>
</>
)
}

export default index;

const TextInputField =(props)=>{
    return(
        <TextInputRowX>
        <label htmlFor="" className="label">{props.label}</label>
        <TextInput />
        </TextInputRowX>
    )
}