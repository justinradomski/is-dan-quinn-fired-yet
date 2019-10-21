import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import SEO from "../components/seo"
import "./layout.css"

const IndexPage = ({ data }) => (
  <BackgroundImage
      Tag="section"
      fluid={data.backgroundImage.childImageSharp.fluid}
      style={{
          display: `flex`,
          minHeight: `100vh`,
          color: `white`,
          position: `relative`,
          overflow: `hidden`,
          display: `flex`,
          alignItems:  `center`,
          fontFamily: `'Poppins', sans-serif`
      }}>
    <SEO title="No." />
    <div
        className="content"
        style={{
            flexBasis: `100%`,
            textAlign: `center`
        }}>
        <h1
            style={{
                fontSize: 22,
                fontWeight: `500`
            }}>
            Has Dan Quinn been fired yet?
        </h1>
        <span
            className="response"
            style={{
                fontSize: 100,
                fontWeight: `700`,
                display: `block`,
                lineHeight: 1
            }}>
            No.
        </span>
    </div>
    <Img
        fluid={data.danImage.childImageSharp.fluid}
        style={{
            position: `absolute`,
            right: 40,
            bottom: `-60px`,
            width: 420
        }}
        />
  </BackgroundImage>
)

export default IndexPage

export const query = graphql`
  {
    danImage: file(name: {eq: "dan"}) {
      childImageSharp {
        fluid(quality: 70) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    backgroundImage: file(name: {eq: "iStock-1125030657"}) {
      childImageSharp {
        fluid(quality: 90) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`
