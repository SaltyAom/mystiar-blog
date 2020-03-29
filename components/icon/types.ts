import { FunctionComponent } from 'react'

interface IconProps {
    className?: string
    onClick?: () => any
}

type IconComponent = FunctionComponent<IconProps>
export default IconComponent