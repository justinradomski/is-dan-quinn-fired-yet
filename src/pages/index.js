import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import SEO from "../components/seo"
import "../components/layout.css"

import mainStyles from "../styles/main.module.scss"

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
        }}
        className={mainStyles.main}>
      <SEO
          title="No."
          image="/images/social-no.jpg" />
      <div
          className={mainStyles.content}
          style={{
              flexBasis: `100%`,
              textAlign: `center`
          }}>
          <h1
              style={{
                  fontSize: 22,
                  fontWeight: `500`
              }}>
              Is Dan Quinn fired yet?
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
      <div className={mainStyles.danImage}>
          <Img
              fluid={data.danImage.childImageSharp.fluid}
              style={{
                  width: `100%`
              }}
              />
      </div>
    </BackgroundImage>
)

export default IndexPage

export const query = graphql`
  {
    danImage: file(name: {eq: "dan"}) {
      childImageSharp {
        fluid(maxWidth: 420, quality: 70) {
          base64
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
        fluid(maxWidth: 1920, quality: 90) {
          base64
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
