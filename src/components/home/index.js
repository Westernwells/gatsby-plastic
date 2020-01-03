import React from 'react'
import Styled from 'styled-components'
import OurProduct from './OurProduct'
import Reviews from './Reviews'
import Services from './Services'
import WeProvide from './WeProvide'
import Landing from '../landing/index'
import OurCustomers from './OurCustomers'
const Hrow = Styled.div`

`;
export default function index() {
    return (
        <div>
        <Landing />
        <Services />
        <OurProduct />
        <WeProvide />
        <Reviews/>
        <OurCustomers />
        </div>
    )
}
