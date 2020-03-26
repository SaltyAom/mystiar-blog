import { memo } from 'react'

import Link from 'next/link'

import EditorImage from 'components/editor/editorImage'

import './written-by.styl'

import WrittenByComponents from './types'

const WrittenBy: WrittenByComponents = memo(({ name, bio, profile }) => {
    return (
        <Link
            href={{ pathname: '/editor/[editor]', query: { editor: name } }}
            as={`/editor/${name}`}
        >
            <a id="written-by" aria-label={`เขียนโดย ${name}`}>
                <article className="wrapper">
                    <EditorImage noLink {...{ name, profile }} />
                    <section className="profile">
                        <h4 className="written">เขียนโดย</h4>
                        <h4 className="name">{name}</h4>
                        <h4 className="bio">{bio}</h4>
                    </section>
                </article>
            </a>
        </Link>
    )
})

export default WrittenBy
