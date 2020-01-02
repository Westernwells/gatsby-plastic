import React from 'react'
import Navbar from './NavBar'
import {ThemeProvider} from 'styled-components'
import {theme}from '../../styles/index'
import GlobalStyle from '../../styles/css-reset'
import Footer from './Footer'
export default function index({children}) {
    return (
        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <div>
            <Navbar />
            {children}
            <Footer />
            </div>
            </ThemeProvider>
    )
}
