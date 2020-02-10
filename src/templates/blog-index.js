import { graphql } from 'gatsby'
import { useLang } from '../context/LanguageContext'

import Bio from '../components/Bio'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PostAbbrev from '../components/PostAbbrev'
import React from 'react'
import SEO from '../components/SEO'
import get from 'lodash/get'

function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { lang, homeLink } = useLang()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <aside>
        <Bio />
      </aside>
      <main>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <PostAbbrev
              lang={lang}
              base={homeLink}
              key={node.fields.slug}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              title={title}
              spoiler={node.frontmatter.spoiler || node.excerpt}
              tags={node.frontmatter.tags}
            />
          )
        })}
      </main>
      <Footer />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          excerpt
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
          }
        }
      }
    }
  }
`
