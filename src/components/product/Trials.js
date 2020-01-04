import React, { Component } from "react";
import Slider from "react-slick";
import '../../slick/slick.css'
import '../../slick/slick-theme.css'
export default class Trials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px",color:"white" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    };
    return (
      <div>
        <h2>Append Dots</h2>
        <Slider {...settings}>
          <div style={{color:"white"}}>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


<tbody>
{/**Another One */}
<tr className="">
<td className="til">Product Model</td>
<td className="">1200 -1000</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
1200 X !000 X 1000
<span className="tds">mm</span>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
1200 X !000 X 1000
<span className="tds">mm</span>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
<p className="tdl">1200 X !000 X 1000</p>
<small className="tds">mm</small>
</td>
</tr>
{/**Another One */}
<tr className="">
<td className="til">External Dimensions</td>
<td className="tdd">
<p className="tdl">1200 X !000 X 1000</p>
<small className="tds">mm</small>
</td>
</tr>
</tbody>