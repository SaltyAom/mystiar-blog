import { memo, Fragment } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import HeaderComponent from './types'

import './header.styl'

const Header: HeaderComponent = memo(
    ({
        meta: {
            title,
            description,
            cover: { normal, retina, alt },
            author: { name }
        },
        content
    }) => (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={`${title} - Mystiar Blog`} />
                <meta name="description" content={description} />

                <meta property="og:title" content={`${title} - Mystiar Blog`} />
                <meta property="og:description" content={description} />
                <meta
                    property="og:image"
                    content={`https://staging.blog.mystiar.com/${normal}`}
                />
                <meta property="og:image:width" content="1920" />
                <meta property="og:image:height" content="1080" />
                <meta property="og:image:alt" content={description} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content={`${title} - Mystiar Blog`}
                />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:site" content="@SaltyAom" />
                <meta
                    name="twitter:image"
                    content={`https://staging.blog.mystiar.com/${normal}`}
                />
                <meta name="twitter:creator" content="@SaltyAom" />
            </Head>
            <header id="blog-header">
                <h1 className="title">{title}</h1>
                <h2 className="written-by">
                    By
                    <Link
                        href={{
                            pathname: '/editor/[editor]',
                            query: { editor: name }
                        }}
                        as={`/editor/${name}`}
                    >
                        <a className="author">{name}</a>
                    </Link>
                </h2>
                <figure className="figure">
                    <img
                        className="image"
                        srcSet={retina ? `${normal}, ${retina} 2x` : normal}
                        src={normal}
                        {...{ alt }}
                    />
                </figure>
            </header>
        </Fragment>
    )
)

export default Header
