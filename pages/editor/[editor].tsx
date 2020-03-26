import { Fragment } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'

import Head from 'next/head'
import Author from 'blog/author/types'

import EditorImage from 'components/editor/editorImage'
import Content from 'components/editor/content'

import { Meta } from 'blog/types'

import 'styles/editor.styl'
import EditorContact from 'components/editor/editorContact'

const Editor = ({ author, related }) => {
    let { name, bio, profile, contact } = JSON.parse(
            author
        ) as Author['SaltyAom'],
        relatedContent = JSON.parse(related) as Meta[]

    return (
        <Fragment>
            <Head>
                <title>{name}, Editor at Mystiar Blog</title>
                <meta
                    name="title"
                    content={`${name}, Editor at Mystiar Blog`}
                />
                <meta
                    name="description"
                    content={`Read more about ${name}'s content at Mystiar Blog, profile and social contact`}
                />

                <meta
                    property="og:title"
                    content={`${name}, Editor at Mystiar Blog`}
                />
                <meta
                    property="og:description"
                    content={`Read more about ${name}'s content at Mystiar Blog, profile and social contact`}
                />
                <meta
                    property="og:image"
                    content={`https://staging.blog.mystiar.com${profile.retina}`}
                />
                <meta property="og:image:width" content="288" />
                <meta property="og:image:height" content="288" />
                <meta
                    property="og:image:alt"
                    content={`Read more about ${name}'s content at Mystiar Blog, profile and social contact`}
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${name}, Editor at Mystiar Blog`}
                />
                <meta
                    name="twitter:description"
                    content={`Read more about ${name}'s content at Mystiar Blog, profile and social contact`}
                />
                <meta name="twitter:site" content="@SaltyAom" />
                <meta
                    name="twitter:image"
                    content={`https://staging.blog.mystiar.com${profile.retina}`}
                />
                <meta name="twitter:creator" content="@SaltyAom" />
            </Head>
            <main id="editor">
                <header className="profile">
                    <EditorImage {...{ name, profile }} />
                    <h1 className="name">{name}</h1>
                    <h2 className="bio">{bio}</h2>
                    <EditorContact {...contact} />
                </header>
                <h3 className="written">เขียนโดย {name}</h3>
                <section className="content">
                    {relatedContent.map(content => (
                        <Content key={content.title} {...content} />
                    ))}
                </section>
            </main>
        </Fragment>
    )
}

export const getStaticProps: GetStaticProps = async context => {
    let editor = context.params.editor as string,
        blog = require('blog').default,
        authors = require('blog/author').default,
        authorKeys = Object.keys(authors)

    let related: string[] = []

    Object.keys(blog).forEach(key => {
        let authorName = blog[key].meta.author.name

        if (authorKeys.includes(authorName)) related.push(blog[key].meta)
    })

    return {
        props: {
            author: JSON.stringify(authors[editor]),
            related: JSON.stringify(related)
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    let blog = require('blog').default,
        authors = Object.keys(require('blog/author').default)

    let paths: string[] = []

    Object.keys(blog).forEach(key => {
        let authorName = blog[key].meta.author.name

        if (authors.includes(authorName)) paths.push(authorName)
    })

    paths = paths.map(path => `/editor/${path}`)

    return {
        paths,
        fallback: false
    }
}

export default Editor
