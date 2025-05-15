// src/components/seo.js
import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function Seo({
  title,
  description,
  image,
  pathname,
  lang = "en",
  meta = [],
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const {
    title: defaultTitle,
    description: defaultDesc,
    siteUrl,
  } = site.siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDesc,
    url: `${siteUrl}${pathname || "/"}`,
    image: image ? `${siteUrl}${image}` : undefined,
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      meta={[
        { name: "description", content: seo.description },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:type", content: "website" },
        ...(seo.image ? [{ property: "og:image", content: seo.image }] : []),
        { property: "og:url", content: seo.url },
      ].concat(meta)}
    >
      <link rel="canonical" href={seo.url} />
    </Helmet>
  )
}
