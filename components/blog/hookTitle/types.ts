import { FunctionComponent } from 'react'

interface HookTitleProps {
    title: string
    on?: string
}

type HookTitleComponent = FunctionComponent<HookTitleProps>
export default HookTitleComponent