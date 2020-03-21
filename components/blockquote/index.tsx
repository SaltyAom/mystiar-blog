import { Fragment } from 'react'

import './blockquote.styl'

const Blockquote = ({ children, author }) => (
    <blockquote className="standalone-blockquote">
        {children}
        { author ? <span className="author">— {author}</span> : null }
    </blockquote>
)

export default Blockquote