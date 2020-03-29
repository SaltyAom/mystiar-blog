import { memo } from 'react'

import Link from 'next/link'

import './mystiar-blog.styl'

const MystiarBlog = memo(() => (
    <Link href="/">
        <a className="mystiar-blog">
            <img
                className="icon"
                src="/assets/icon/mystiar.png"
                alt="Mystiar Blog"
                loading="lazy"
            />
            <h1 className="title">Mystiar Blog</h1>
        </a>
    </Link>
))

export default MystiarBlog
