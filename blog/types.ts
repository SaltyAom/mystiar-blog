import { FunctionComponent } from "react"

import { AuthorField } from "./author/types"

export interface Meta {
    title: string
    description: string
    cover: {
        normal: string
        retina?: string
        alt: string
    }
    author: AuthorField
    date: {
        written: number
        update: number
    }
    tags: string[]
}

export type Blog = {
    [key: string]: {
        meta: Meta
        Content: FunctionComponent
    }
}