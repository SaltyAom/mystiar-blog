import { FunctionComponent } from "react"

interface ImageProps {
    src: string
    alt: string
}

type ImageComponent = FunctionComponent<ImageProps>
export default ImageComponent