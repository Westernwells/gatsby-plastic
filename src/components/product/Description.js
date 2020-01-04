import React from 'react'
import Styled from 'styled-components'
import Img1 from '../../images/pro1.jpg'
import Img2 from '../../images/pro2.jpg'
import Img3 from '../../images/pro3.jpg'
import Img4 from '../../images/pro4.jpg'
import Img5 from '../../images/pro5.jpg'


import Slider from "react-slick";
import '../../slick/slick.css'
import '../../slick/slick-theme.css'

const DescRow = Styled.div`
width:100%;
background-color:${props=>props.theme.primary};
display:grid;
grid-template-columns: repeat(2, 600px);
grid-column-gap:20px;
justify-content:center;
padding:0 0 20px 0;

`;
const ImageCon = Styled.div`
background-color:white;

.img-sliderx{
  display:flex !important;
  flex-direction:row;
  justify-content:space-around;
  width:100%;
  border-radius:5px;
  /* border:solid 3px white; */
  margin:10px 0 0 0;
  /* background-color:white; */
}
.slide-img{
list-style:none;
margin:5px;
border-radius:5px;
display:flex;
}
.thumbnail{
  width:90px;
  height:75px;
}
`;
const Image = Styled.img`
width:600px;
height:400px;
`;
const DescTableCon = Styled.div`
display:flex;
flex-direction:column;
background-color:white;
padding:10px 20px 5px 20px;
.desc-header{
  font-size:1.3rem;
  font-weight:400;
  margin-top:0.2rem;
  margin-bottom:0.3rem;
}

`;
const DescTable = Styled.table`
table-layout: fixed;
  width: 100%;
  border: 5px solid ${props=>props.theme.primary};
  
   th,
 td {
  border: solid 3px ${props=>props.theme.primary};
  border-collapse: collapse;
  padding:5px;

}
th{
  vertical-align:middle;
}
.til{
  font-size:1.2rem;
  font-weight:500;
}
.tdd{
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.syv{
  border-right:none;
  text-align:left;
}
.syn{
  border-left:none;
  text-align:right;
}
`;
const ReqBtn = Styled.button`
width:100%;
padding:10px 0;
text-align:center;
font-size:1.3rem;
font-weight:500;
background-color:${props=>props.theme.primary};
color:white;
border:none;
border-radius:5px;
box-shadow:none;
margin:5px auto;
`;

const Tag = Styled.div`
.tag-header{
  font-size:1.2rem;
  font-weight:600;
  margin:5px 0 0 0;
}
.tags{
  display:flex;
  flex-direction:column;
}
.tag{
  list-style:none;
  margin:5px 0;
}
.tag a{
  color:${props=>props.theme.primary};
  font-size:1rem;
  text-decoration:none;
  font-weight:450;

}
`;
const pstyle = {
  display:"flex"
};
const Description =()=>{
  let images =[Img1,Img2,Img3,Img4,Img5]
 
  const settings = {
    customPaging: function(i) {
      return (
    <a>
    <img src={images[i]} alt="" className="thumbnail"/>
    </a>
      );
    },
    dots: true,
    className:"",
    dotsClass: "img-sliderx",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return(
        <DescRow>
        <ImageCon>
        <Slider {...settings}>
        
        <Image src={Img1} />
        <Image src={Img2} />
        <Image src={Img3} />
        <Image src={Img4} />
        <Image src={Img5} />
        
        </Slider>
        
        </ImageCon>
        <DescTableCon>
        <p className="desc-header">Description</p>
        <DescTable>
      <tbody>
      <tr>
    <th class="tg-0lax">Product Model</th>
    <th class="syv" colspan="2">1200 - 1000</th>

  </tr>
  {/**Another one  External*/}
  <tr>
    <th class="tg-0lax" rowspan="2">External Dimension<br />(L x W x T)</th>
    <td class="syv">1200 X 1000 X 1000</td>
    <td class="syn">mm</td>
  </tr>
  <tr>
    <td class="syv">47.24 X 39.37 X 39.37</td>
    <td class="syn">in</td>
  </tr>
 {/**Another one  Internal*/}
 <tr>
 <th class="tg-0lax" rowspan="2">Internal Dimension<br />(L x W x T)</th>
 <td class="syv">1200 X 1000 X 1000</td>
 <td class="syn">mm</td>
</tr>
<tr>
 <td class="syv">47.24 X 39.37 X 39.37</td>
 <td class="syn">in</td>
</tr>
{/**Another one  Weight*/}
<tr>
<th class="tg-0lax" rowspan="2">Weight</th>
<td class="syv">1200 X 1000 X 1000</td>
<td class="syn">mm</td>
</tr>
<tr>
<td class="syv">47.24 X 39.37 X 39.37</td>
<td class="syn">in</td>
</tr>
{/**Another one  Volume*/}
<tr>
  <th class="tg-0lax" rowspan="2">Volume</th>
  <td class="syv">1200 X 1000 X 1000</td>
  <td class="syn">mm</td>
</tr>
<tr>
  <td class="syv">47.24 X 39.37 X 39.37</td>
  <td class="syn">in</td>
</tr>
{/**Another one  Load Capacity*/}
<tr>
  <th class="tg-0lax" rowspan="2">Load Capacity</th>
  <td class="syv">1200 X 1000 X 1000</td>
  <td class="syn">mm</td>
</tr>
<tr>
  <td class="syv">47.24 X 39.37 X 39.37</td>
  <td class="syn">in</td>
</tr>
      </tbody>
     

        </DescTable>
        <ReqBtn>Request Free Quote</ReqBtn>
        <Tag>
        <p className="tag-header">Tags</p>
        <ul className="tags">
        {/**Tag */}
        <li className="tag">
        <a href="">Plastic pallet</a>
        </li>
         {/**Tag */}
         <li className="tag">
         <a href="">Plastic pallet</a>
         </li>
          {/**Tag */}
        <li className="tag">
        <a href="">Plastic pallet</a>
        </li>
        </ul>
        </Tag>
        </DescTableCon>
        </DescRow>
    )
}

export default Description;