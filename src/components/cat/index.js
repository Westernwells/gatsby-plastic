import React from 'react'
import Styled from 'styled-components'
import ProductCard from './ProductCard';
import Landing from '../landing/index'
const Container = Styled.div`
/* width:100%; */
`;
const CatDetRow = Styled.div`
background-color:white;
/* width:100%; */
padding:20px;
.cat-title{
    font-size:2rem;
    font-weight:bold;
}
.cat-details{

}
.feature-header{
font-size:1.5rem;
}
.features{

}
.feature{
    list-style:none;
}
`;

const ProdListRow = Styled.div`
/* width:100%; */
background-color: ${props => props.theme.primary};
padding:20px 10%;

.product-header{
    font-size:1.5rem;
    font-weight:bold;
    text-align:center;
    color:white;
}
.product-list{
display:grid;
grid-template-columns:repeat(2,1fr);
grid-column-gap:20px;
justify-content:center;
}
`;

const Index =()=>{
    return(
        <Container>
        <Landing />
<CatDetails/>
<ProdList />
</Container>
    )
}

const CatDetails =()=>{
    return(
        
        <CatDetRow>
        <p className="cat-title">Euro Stacking container</p>
        <p className="cat-details">Available in a variety of dimensions, Plastic EURO stacking containers and boxes generally have a greater volume capacity due to their straight sides. The reinforced corners of the Plastic Euro Stacking Containers make them an ideal choice for transporting heavy loads. Our Euro (European standard size) stacking boxes can be tailored to suit your requirements with lids, hinges, inner dividers, personalised print and locking clasps. Thanks to its food grade plastic construction, this high quality range of plastic containers is resistant to acids and oils. Euro Containers are uniform in dimensions meaning they are ideal for automated manufacturing systems or for product handling. We stock a great selection of Euro Containers, all our stacking heavy duty containers are strong and durable.
        Features & Benefites of the EURO stacking containe</p>
        </CatDetRow>
    )
}

const ProdList =()=>{
    return(
        <ProdListRow>
        <p className="product-header">Products</p>
        <div className="product-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
        </div>
        </ProdListRow>
    )
}
export default Index;