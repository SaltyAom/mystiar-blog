import { Fragment } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXProvider } from "@mdx-js/react"

import blog from 'blog'
import components from 'blog/component'

import Header from 'components/header'

import 'styles/blog.styl'

const Content = ({ content }) => {
    let { meta, Content } = blog[content]

    return (
        <Fragment>
            <article id="blog">
                <Header {...{ content, meta }} />
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
            </article>
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    let content = context.params.content as string

    return {
        props: {
            content
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    let blog = require('blog').default

    let paths = Object.getOwnPropertyNames(blog).map(path => `/content/${path}`)

    return {
        paths,
        fallback: false
    }
}

export default Content
