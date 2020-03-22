import { FunctionComponent } from 'react'

import { Blog, Meta } from 'blog/types'

interface HeaderProps {
    content: keyof Blog
    meta: Meta
}

type HeaderComponent = FunctionComponent<HeaderProps>
export default HeaderComponent