import { isServer } from 'libs/helpers'

export const serialize = (text: string) => text.replace(/\ /g, '-'),
    hook = (text: string) => !isServer ? `${window.location.origin}${window.location.pathname}#${serialize(text)}` : ''