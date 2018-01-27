import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <main style={{minHeight: '100vh'}}>
          <Navigation />
          <IndexHeadContainer>
            <Hero>
              <ProjectName>{config.siteTitle}</ProjectName>
              <h5 style={{marginTop: '5px', marginBottom: '25px'}}>{config.siteDescription} ;)</h5>
              <CtaButton to={'/hello-world'}>Get started</CtaButton>
              <div />
              <ImageContainer>
                <img alt="clipped.config.js" src="/carbon.png" />
              </ImageContainer>
            </Hero>
          </IndexHeadContainer>
        </main>
      </div>
    );
  }
}

export default Index;

const ImageContainer = styled.div`
  max-height:320px;
  overflow:hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .5s ease;
  &:hover {
    max-height: 350px;
  }

  & > img {
    max-width: 800px;
    @media screen and (max-width: 600px) {
      max-width: 100%;
    }
  }
`

const IndexHeadContainer = styled.div`
  // background: ${props => props.theme.brand};
  // padding: ${props => props.theme.sitePadding};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  text-align: center;
  height: fit-available;
  overflow-y: none;
`

const ProjectName = styled.h1`
  border-bottom: none;
  color: ${props => props.theme.brand};
  max-width: 100%;
`

const Hero = styled.div`
  padding: 50px 0;
  min-width: 100%;
  & > h1 {
    font-size: 12rem;
    font-weight: 600;
    font-family: 'Leckerli One';
    letter-spacing: 0.2rem;    
    // margin-bottom: 5px;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;
`


/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges { 
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
