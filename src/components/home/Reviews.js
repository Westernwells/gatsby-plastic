import React from 'react'
import Styled from 'styled-components'

const RevRow = Styled.div`
/* width:100%; */
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${props =>props.theme.primary};
padding:20px;
margin:20px 0;
.rev-header{
    font-size:1.5rem;
    color:white;
    font-weight:500;
    margin:0 0 10px 0;

}
.review{
    font-size:1.3rem;
    font-weight:400;
    color:white;
    text-align:center;
}
.reviewer{
    align-self:flex-end;
    color:white;

}
`;

const Reviews = ()=>{
    return(
        <RevRow>
        <p className="rev-header">Reviews</p>
        <blockquote className="review">The product are amazingly beautiful we cant just stop loving it</blockquote>
        <p className="reviewer">-- Muhammed Traore. POrkHum</p>
        </RevRow>

    )
}
export default Reviews;