import { FunctionComponent } from "react"

export interface Author {
    name: string
}

export interface Meta {
    title: string
    description: string
    cover: {
        normal: string
        retina?: string
        alt: string
    }
    author: Author
}

export type Blog = {
    [key: string]: {
        meta: Meta
        Content: FunctionComponent
    }
}