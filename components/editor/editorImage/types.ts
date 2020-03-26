import { FunctionComponent } from 'react'

import { AuthorImage } from 'blog/author/types'

interface EditorImageProps {
    name: string
    profile: AuthorImage
    href?: string
    as?: string
    noLink?: boolean
    className?: string
}

type EditorImageComponent = FunctionComponent<EditorImageProps>
export default EditorImageComponent