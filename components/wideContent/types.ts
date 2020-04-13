import { FunctionComponent } from 'react'
import { Meta } from 'blog/types'

interface WideContentProps {
    meta: Meta
}

type WideContentComponent = FunctionComponent<WideContentProps>
export default WideContentComponent