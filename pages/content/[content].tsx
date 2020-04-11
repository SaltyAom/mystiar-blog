import { Fragment, useEffect } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'

import { MDXProvider } from '@mdx-js/react'

import { getBlog, getBlogMeta } from 'blog'
import components from 'blog/component'
import Header from 'components/blog/header'

import 'styles/blog.styl'

const WrittenBy = dynamic(() => import('components/blog/writtenBy')),
    Tags = dynamic(() => import('components/blog/tags')),
    MystiarBlog = dynamic(() => import('components/mystiarBlog')),
    Recommended = dynamic(() => import('components/editor/content')),
    Adsense = dynamic(() => import('components/blog/adsense'), {
        ssr: false
    })

const Content = ({ content }: { content: string }) => {
    let { meta, Content, recommended } = getBlog(content),
        {
            author: { name, bio, profile },
            tags,
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
                    behavior: 'smooth',
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
            <section id="recommended-title">
                <h4 className="title">Read more</h4>
                <p className="detail">บทความน่าอ่านอื่นๆ</p>
            </section>
            <section id="recommended">
                {recommended
                    .map((name) => getBlogMeta(name))
                    .map((meta) => (
                        <Recommended key={meta.title} {...meta} />
                    ))}
            </section>
            <Adsense {...{ content }} />
            <MystiarBlog />
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    let content = context.params.content as string

    return {
        props: {
            content,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    let blog = require('blog').default

    let paths = Object.keys(blog).map((path) => `/content/${path}`)

    return {
        paths,
        fallback: false,
    }
}

export default Content
