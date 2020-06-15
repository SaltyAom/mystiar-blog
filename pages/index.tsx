import { Fragment } from 'react'

import Head from 'next/head'
import dynamic from 'next/dynamic'

import MystiarBlog from 'components/mystiarBlog'

import Featured from 'components/featured'

import { getLatestBlogMeta, getNewBlogsMeta } from 'blog'
import { getEditors } from 'blog/author'

import 'styles/landing.styl'

const Content = dynamic(() => import('components/editor/content')),
    EditorImage = dynamic(() => import('components/editor/editorImage')),
    WideContent = dynamic(() => import("components/wideContent"))

const Landing = () => {
    return (
        <Fragment>
            <Head>
                <title>Mystiar Blog</title>

                <meta
                    property="og:image"
                    content={`https://blog.saltyaom.com/assets/app/mystiar-blog.jpg`}
                />
                <meta
                    name="twitter:image"
                    content={`https://blog.saltyaom.com/assets/app/mystiar-blog.jpg`}
                />

                <link rel="canonical" href={`https://blog.saltyaom.com`} />
            </Head>
            <main id="landing">
                <MystiarBlog />

                <Featured meta={getLatestBlogMeta()} />

                <h3 className="title">ล่าสุด</h3>
                <section id="new-blogs">
                    {getNewBlogsMeta(1, 6).map((meta) => (
                        <Content key={meta.title} {...meta} />
                    ))}
                </section>

                <h3 className="title">Editors</h3>
                <section id="blog-editors">
                    {getEditors().map((editor) => (
                        <EditorImage
                            key={editor.name}
                            href={{
                                pathname: '/editor/[editor]',
                                query: {
                                    editor: editor.name
                                }
                            }}
                            as={`/editor/${editor.name}`}
                            className="-landing"
                            {...editor}
                        />
                    ))}
                </section>

                <WideContent meta={getNewBlogsMeta(8, 1)[0]} />

                <MystiarBlog />
            </main>
        </Fragment>
    )
}

export default Landing
