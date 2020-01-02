import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/index"
import Image from "../components/image"
import SEO from "../components/seo"
import Index from '../components/cat/index'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
   <Index />
  </Layout>
)

export default IndexPage
