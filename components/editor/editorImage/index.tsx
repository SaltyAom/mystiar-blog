import { memo } from 'react'

import Link from 'next/link'

import EditorImageComponent from './types'

import './editor-image.styl'

const EditorImage: EditorImageComponent = memo(
    ({
        name,
        profile: { normal, retina, from },
        href = '',
        as = '',
        noLink = false,
        className = ''
    }) => {
        let { owner, link } =
            typeof from !== 'undefined' ? from : { owner: false, link: null }

        let children = (
            <section className="editor-image">
                <figure className={`photo ${className}`}>
                    <img
                        className="image"
                        srcSet={`${normal}, ${retina} 2x`}
                        src={normal}
                        alt={`${name}' profile`}
                        title={`Illustration from ${owner}`}
                    />
                </figure>
            </section>
        )

        switch (true) {
            case noLink:
                return children

            case href !== '':
                return (
                    <Link {...{ href, as }}>
                        <a className="link">{children}</a>
                    </Link>
                )

            default:
                return (
                    <a
                        className="link"
                        href={link ? link : '.'}
                        rel="noopener norefferer"
                        target="_blank"
                    >
                        {children}
                    </a>
                )
        }
    }
)

export default EditorImage
