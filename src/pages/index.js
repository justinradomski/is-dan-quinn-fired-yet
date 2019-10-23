import React from "react"
import Helmet from "react-helmet"

import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import SEO from "../components/seo"
import "../components/layout.css"

import {
	FacebookShareButton,
	TwitterShareButton,
	RedditShareButton,
} from 'react-share';

import mainStyles from "../styles/main.module.scss"

const IndexPage = ({ data }) => (
    <main className={mainStyles.columnsWrap}>
        <BackgroundImage
            Tag="section"
            fluid={data.backgroundImage.childImageSharp.fluid}
            style={{
                display: `flex`,
                color: `white`,
                overflow: `hidden`,
            }}
            className={mainStyles.main}>
          <SEO
              title="No."
              image="/images/social-no.jpg" />
          <div
              className={mainStyles.content}
              style={{
                  flexBasis: `100%`,
                  textAlign: `left`
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
          <div className={mainStyles.shareBox}>
              <span className={mainStyles.shareTitle}>Share</span>
              <ul>
                  <li className="share-facebook">
                      <FacebookShareButton url={data.site.siteMetadata.siteUrl} className={mainStyles.shareButton}>
                          <i className="fab fa-fw fa-facebook-f" aria-hidden="true"></i>
                      </FacebookShareButton>
                  </li>
                  <li className="share-twitter">
                      <TwitterShareButton url={data.site.siteMetadata.siteUrl} className={mainStyles.shareButton}>
                         <i className="fab fa-fw fa-twitter" aria-hidden="true"></i>
                      </TwitterShareButton>
                  </li>
              </ul>
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
        <section className={mainStyles.news}>
            <h2 className={mainStyles.newsHeading}>Here's why...</h2>
            <div className={mainStyles.articleList}>
                {data.allArticlesJson.nodes.map((article,i) => (
                    <div
                        key={'article_' + i}
                        className={mainStyles.article}>
                        <a href={article.link} className={mainStyles.articleLink} target="_blank" rel="noopener noreferrer">
                            <Img
                                fixed={article.image.src.childImageSharp.fixed}
                                className={mainStyles.articleImage} />
                            <div className={mainStyles.articleContent}>
                                <h3>{article.title}</h3>
                                <span className={mainStyles.articleSource}>{article.source}</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
        <Helmet>
          <script src="https://kit.fontawesome.com/27b3dd1eef.js" crossorigin="anonymous"></script>
          <meta name="google-site-verification" content="cNzomnTKqkaKs--c9RT96ICPH5vElugfGIQSKG_qhHw" />
        </Helmet>
    </main>
)

export default IndexPage

export const query = graphql`
  {
    danImage: file(name: {eq: "dan"}) {
      childImageSharp {
        fluid(maxWidth: 585, quality: 70) {
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
    allArticlesJson {
      nodes {
        title
        link
        image {
          src {
            childImageSharp {
                fixed(width: 117, height: 117, quality: 70) {
                aspectRatio
                base64
                height
                originalName
                src
                srcSet
                srcSetWebp
                srcWebp
                width
              }
            }
          }
        }
        source
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
