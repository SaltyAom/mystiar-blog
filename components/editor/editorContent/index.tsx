import Link from 'next/link'

import { composeContentPath } from 'libs/blog'

import EditorContentComponent from './types'

import './editor-content.styl'

const EditorContent: EditorContentComponent = ({
    title,
    cover: { normal, retina = false, alt }
}) => (
    <Link
        href={{
            pathname: "/content/[content]",
            query: { content: composeContentPath(normal) }
        }}
        as={composeContentPath(normal)}
    >
        <a className="editor-content-link" aria-label={`อ่าน ${title}`}>
            <article className="editor-content">
                <figure className="figure">
                    <img
                        className="image"
                        srcSet={retina ? `${normal} 640w, ${retina} 1280w` : normal}
                        src={normal}
                        {...{ alt }}
                        loading="lazy"
                    />
                </figure>
                <h3 className="title">{title}</h3>
            </article>
        </a>
    </Link>
)

export default EditorContent
