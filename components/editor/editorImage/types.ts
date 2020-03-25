import { FunctionComponent } from 'react'

import { AuthorImage } from 'blog/author/types'

interface EditorImageProps {
    name: string
    profile: AuthorImage
}

type EditorImageComponent = FunctionComponent<EditorImageProps>
export default EditorImageComponent