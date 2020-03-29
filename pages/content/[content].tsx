import { Fragment, useEffect } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'

import { MDXProvider } from '@mdx-js/react'
import AdSense from 'react-adsense'

import { getBlog } from 'blog'
import components from 'blog/component'
import Header from 'components/blog/header'

import 'styles/blog.styl'

const WrittenBy = dynamic(() => import('components/blog/writtenBy')),
    Tags = dynamic(() => import('components/blog/tags')),
    MystiarBlog = dynamic(() => import('components/mystiarBlog'))

const Content = ({ content }) => {
    let { meta, Content } = getBlog(content),
        {
            author: { name, bio, profile },
            tags
        } = meta

    useEffect(() => {
        if (!window.location.hash) return

        window.addEventListener('load', () => {
            let hookedElement = document.getElementById(
                decodeURI(window.location.hash).replace('#', '')
            )

            if (hookedElement)
                window.scrollTo({
                    top: hookedElement.offsetTop - 30,
                    behavior: 'smooth'
                })
        })
    }, [])

    return (
        <Fragment>
            <article id="blog">
                <Header {...{ meta }} />
                <MDXProvider components={components}>
                    <Content />
                </MDXProvider>
                <Tags {...{ tags }} />
                <WrittenBy {...{ name, bio, profile }} />
            </article>
            <AdSense.Google
                layout="in-article"
                format="fluid"
                client="ca-pub-8437449592660799"
                slot="6199709868"
            />
            <MystiarBlog />
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

    let paths = Object.keys(blog).map(path => `/content/${path}`)

    return {
        paths,
        fallback: false
    }
}

export default Content
