import React from 'react'
import Styled from 'styled-components'
import Img from '../../images/pro1.jpg'
const RelRow = Styled.div`
background-color:${props => props.theme.primary};
margin:10px 0;
padding:10px 20px;
.rel-header{
    font-size:1.5rem;
    font-weight:bold;
    color:white;
    margin-bottom:10px;
}
`;

const RelPosts =Styled.div`
display:grid;
grid-template-columns:repeat(5,200px);
grid-column-gap:30px;
justify-content:center;
.rel-header{
    font-size:1.5rem;
    font-weight:bold;
}
`;
const RelPost = Styled.div`
width:200px;
/* position:relative; */
backgroud-color:white;
.post-img{
    width:200px;
    height:200px;
}
.rel-title{
    font-weight:500;
    padding:10px 5px;
    background-color:white;
    /* color:white; */
    color:${props =>props.theme.primary};
    font-size:1.3rem;
    display:block;
}
`;
const Related =()=>{
    return(
        <RelRow>
        <p className="rel-header">Related Post</p>
        <RelPosts>
        {/**Another One */}
        <RelPost>
        <img src={Img} alt="" className="post-img"/>
        <p className="rel-title">Pallete Container</p>
        </RelPost>  
        {/**Another One */}
        <RelPost>
        <img src={Img} alt="" className="post-img"/>
        <p className="rel-title">Pallete Container</p>
        </RelPost>
          {/**Another One */}
          <RelPost>
          <img src={Img} alt="" className="post-img"/>
          <p className="rel-title">Pallete Container</p>
          </RelPost>
           {/**Another One */}
        <RelPost>
        <img src={Img} alt="" className="post-img"/>
        <p className="rel-title">Pallete Container</p>
        </RelPost>
          {/**Another One */}
          <RelPost>
          <img src={Img} alt="" className="post-img"/>
          <p className="rel-title">Pallete Container</p>
          </RelPost>
        </RelPosts>
        </RelRow>
    )
}

export default Related;