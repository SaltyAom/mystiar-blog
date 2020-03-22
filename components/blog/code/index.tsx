import { Fragment, memo, useCallback, useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import copy from 'libs/copy'

import './code.styl'

const Copy = dynamic(() => import('components/icon/copy') /* webpackChunkName: 'Copy' */),
    Snackbar = dynamic(() => import('../snackbar') /* webpackChunkName: 'Snackbar' */)

const Code = memo(({ children }) => {
    let [isShowingSnackbar, showSnackbar] = useState(false),
        [snackbarMessage, updateSnackbarMessage] = useState("")

    useEffect(() => {
        if(isShowingSnackbar)
            setTimeout(() => {
                showSnackbar(false)
            }, 4750)
    }, [isShowingSnackbar])

    let requestCopy = useCallback((event: Event) => {
        try {
            // @ts-ignore
            let element = event.target.tagName

            let code: HTMLPreElement

            switch (element) {
                case 'svg':
                    // @ts-ignore
                    code = event.target.nextElementSibling
                    break

                case 'g':
                    // @ts-ignore
                    code = event.target.parentElement.nextElementSibling
                    break

                case 'path':
                    // @ts-ignore
                    code = event.target.parentElement.parentElement.nextElementSibling
                    break

                default:
                    break
            }

            copy(code.textContent)
            updateSnackbarMessage("Copied to clipboard")
            showSnackbar(true)
        } catch(err) {
            updateSnackbarMessage("Failed to copy")
            showSnackbar(false)
        }
    }, [])

    return (
        <Fragment>
            <Copy className="standalone-copy" onClick={() => requestCopy(event)} />
            <code className="standalone-code">{children}</code>
            {isShowingSnackbar ? (
                <Snackbar>{snackbarMessage}</Snackbar>
            ) : null}
        </Fragment>
    )
})

export default Code
