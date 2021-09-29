import Head from 'next/head'
import React, { Component } from 'react'
import { NextRouter, withRouter } from 'next/router'

interface SeoProps {
  title: string
  description: string
  thumb: string
  router: NextRouter
}

class Seo extends Component<SeoProps> {
  render(): JSX.Element {
    return (
      <Head>
        <title>{this.props.title} | My Notes</title>
        <meta name="title" content={`${this.props.title} | My Notes`} />
        <meta name="description" content={this.props.description} />
        <meta
          name="image"
          content={`https://${process.env.VERCEL_URL}/images/thumbs${this.props.thumb}`}
        />
        <meta property="image:alt" content={`${this.props.title} | My Notes`} />

        <meta property="og:title" content={`${this.props.title} | My Notes`} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="My Notes" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:width" content="627" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://${process.env.VERCEL_URL}${this.props.router.asPath}`}
        />
        <meta property="og:description" content={this.props.description} />
        <meta
          property="og:image"
          content={`https://${process.env.VERCEL_URL}/images/thumbs${this.props.thumb}`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content={`${this.props.title} | My Notes`}
        />

        <meta name="twitter:title" content={`${this.props.title} | My Notes`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:url"
          content={`https://${process.env.VERCEL_URL}${this.props.router.asPath}`}
        />
        <meta name="twitter:description" content={this.props.description} />
        <meta
          name="twitter:image"
          content={`https://${process.env.VERCEL_URL}/images/thumbs${this.props.thumb}`}
        />
        <meta
          name="twitter:image:src"
          content={`https://${process.env.VERCEL_URL}/images/thumbs${this.props.thumb}`}
        />
        <meta
          name="twitter:image:alt"
          content={`${this.props.title} | My Notes`}
        />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:width" content="627" />
      </Head>
    )
  }
}

export default withRouter(Seo)
