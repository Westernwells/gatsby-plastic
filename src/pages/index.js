import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from '../components/home/index'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Home />
  </Layout>
)

export default IndexPage
