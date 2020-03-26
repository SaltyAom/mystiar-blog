import { FunctionComponent } from 'react'

import { Blog, Meta } from 'blog/types'

interface HeaderProps {
    meta: Meta
}

type HeaderComponent = FunctionComponent<HeaderProps>
export default HeaderComponent