import { FunctionComponent } from "react"

interface ImageProps {
    src: string
    alt: string
    no2x?: boolean
}

type ImageComponent = FunctionComponent<ImageProps>
export default ImageComponent