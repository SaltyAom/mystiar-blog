import { FunctionComponent } from 'react'
import { AuthorImage } from 'blog/author/types';

interface WrittenByProps {
    name: string
    bio: string
    profile: AuthorImage
}

type WrittenByComponents = FunctionComponent<WrittenByProps>
export default WrittenByComponents