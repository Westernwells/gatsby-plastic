import React from 'react'
import Styled from 'styled-components'

const RevRow = Styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
background-color:${props =>props.theme.primary};
.rev-header{
    font-size:1.5rem;
    color:white;
    font-weight:500;
}
.review{
    font-size:1.5rem;
    font-weight:500;
    color:white;
    text-align:center;
}

`;

const Reviews = ()=>{
    return(
        <RevRow>
        <p className="rev-header">Reviews</p>
        <p className="review">The product are amazingly beautiful we cant just stop loving it</p>
        </RevRow>

    )
}
export default Reviews;