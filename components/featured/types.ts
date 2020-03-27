import { FunctionComponent } from 'react'
import { Meta } from 'blog/types'

interface FeaturedProps {
    meta: Meta
}

type FeaturedComponent = FunctionComponent<FeaturedProps>
export default FeaturedComponent