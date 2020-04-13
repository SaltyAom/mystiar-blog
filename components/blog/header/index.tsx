import { memo, Fragment } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import { composeTime, composeContentPath } from 'libs/blog'

import HeaderComponent from './types'

import './header.styl'

const Header: HeaderComponent = memo(
    ({
        meta: {
            title,
            description,
            cover: { normal, retina, alt },
            author: { name, profile },
            date: { written, update },
            tags
        }
    }) => {
        let structuredData = `
		{
			"@context":"https://schema.org/",
			"@type":"Article",
			"datePublished": "${composeTime(written)}",
			"dateModified": "${composeTime(update)}",
			"description": "${description}",
			"headline": "${title}",
			"image": ["${retina ? retina : normal}"],
			"inLanguage": "Thai",
			"mainEntityOfPage": "https://blog.mystiar.com${composeContentPath(normal)}",
			"url": "https://blog.mystiar.com${composeContentPath(normal)}",
			"publisher": {
				"@type": "Organization",
				"name": "Mystiar Blog",
				"logo": {			
					"@type": "imageObject",
					"width": "512",
					"height": "512",
					"url": "https://blog.mystiar.com/assets/icon/mystiarX512.png"
				}
			},
			"author": {
				"name": "${name}",
				"image": {
					"@type": "imageObject",
					"width": "288",
					"height": "288",
					"url": "${profile.retina}"
				}
			}
		}
	`.replace(/\n|\t|  /g, '')

        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                    <meta name="title" content={`${title} - Mystiar Blog`} />
                    <meta name="description" content={description} />

                    <meta name="keywords" content={tags.toString()} />
                    <meta name="article:tag" content={tags.toString()} />
                    <meta
                        property="article:published_time"
                        content={composeTime(written)}
                    />
                    <meta
                        property="article:modified_time"
                        content={composeTime(update)}
                    />

                    <meta
                        property="og:title"
                        content={`${title} - Mystiar Blog`}
                    />
                    <meta property="og:description" content={description} />
                    <meta
                        property="og:image"
                        content={`https://blog.mystiar.com${
                            retina ? retina : normal
                        }`}
                    />
                    <meta property="og:image:alt" content={description} />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content={`${title} - Mystiar Blog`}
                    />
                    <meta name="twitter:description" content={description} />
                    <meta
                        name="twitter:image"
                        content={`https://blog.mystiar.com${
                            retina ? retina : normal
                        }`}
                    />
                    {/* <meta name="twitter:site" content="@SaltyAom" /> */}
                    {/* <meta name="twitter:creator" content="@SaltyAom" /> */}

                    <link
                        rel="canonical"
                        href={`https://blog.mystiar.com${composeContentPath(
                            normal
                        )}`}
                    />

                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: structuredData
                        }}
                    />
                </Head>
                <header id="blog-header">
                    <h1 className="title">{title}</h1>
                    <h2 className="written-by">
                        —
                        <Link
                            href={{
                                pathname: '/editor/[editor]',
                                query: { editor: name }
                            }}
                            as={`/editor/${name}`}
                        >
                            <a className="author">{name}</a>
                        </Link>
                        เมื่อ{' '}
                        <time className="time" dateTime={composeTime(update)}>
                            {new Date(update).toLocaleDateString()}
                        </time>
                    </h2>
                    <figure className="figure">
                        <img
                            className="image"
                            srcSet={
                                retina
                                    ? `${normal} 640w, ${retina} 1280w`
                                    : normal
                            }
                            src={normal}
                            {...{ alt }}
                        />
                    </figure>
                </header>
            </Fragment>
        )
    }
)

export default Header
