import { Fragment, memo, useCallback, useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import copy from 'libs/copy'

import HookTitleComponent from './types'

import './hook-title.styl'

const Hook = dynamic(
        () => import('components/icon/hook') /* webpackChunkName: 'Hook' */
    ),
    Snackbar = dynamic(
        () => import('../snackbar') /* webpackChunkName: 'Snackbar' */
    )

const HookTitle: HookTitleComponent = memo(({ title, on = false }) => {
    let [isShowingSnackbar, showSnackbar] = useState(false),
        [snackbarMessage, updateSnackbarMessage] = useState('')

    useEffect(() => {
        if (isShowingSnackbar)
            setTimeout(() => {
                showSnackbar(false)
            }, 4750)
    }, [isShowingSnackbar])

    let requestCopy = useCallback(() => {
        try {
            copy(title)
            updateSnackbarMessage('Copied to clipboard')
            showSnackbar(true)
        } catch (err) {
            updateSnackbarMessage('Failed to copy')
            showSnackbar(false)
        }
    }, [])

    return (
        <Fragment>
            <Hook
                className={`hook-title ${on ? `-${on}` : ''}`}
                onClick={() => requestCopy()}
            />
            {isShowingSnackbar ? <Snackbar>{snackbarMessage}</Snackbar> : null}
        </Fragment>
    )
})

export default HookTitle
