import { Fragment, memo, useCallback, useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import { defaultProps } from 'prism-react-renderer'
import githubTheme from 'prism-react-renderer/themes/github'
import draculaTheme from 'prism-react-renderer/themes/dracula'

import { isServer } from 'libs/helpers'
import copy from 'libs/copy'

import './code.styl'

const Highlight = dynamic(() => import('prism-react-renderer')),
    Copy = dynamic(
        () => import('components/icon/copy') /* webpackChunkName: 'Copy' */
    ),
    Snackbar = dynamic(
        () => import('../snackbar') /* webpackChunkName: 'Snackbar' */
    )

const Code = memo(({ children }) => {
    let [isShowingSnackbar, showSnackbar] = useState(false),
        [snackbarMessage, updateSnackbarMessage] = useState(''),
        [isDark, updateIsDark] = useState(
            !isServer
                ? window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches
                : false
        )

    useEffect(() => {
        if (!isServer && window.matchMedia('').addEventListener)
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', event => {
                    updateIsDark(event.matches)
                })
    }, [])

    useEffect(() => {
        if (isShowingSnackbar)
            setTimeout(() => {
                showSnackbar(false)
            }, 4750)
    }, [isShowingSnackbar])

    let requestCopy = useCallback((event: Event) => {
        try {
            let target = event.target as HTMLElement,
                element = target.tagName

            let code: HTMLPreElement

            switch (element) {
                case 'svg':
                    code = target.nextElementSibling as HTMLPreElement
                    break

                case 'g':
                    code = target.parentElement
                        .nextElementSibling as HTMLPreElement
                    break

                case 'path':
                    code = target.parentElement.parentElement
                        .nextElementSibling as HTMLPreElement
                    break

                default:
                    break
            }

            copy(code.textContent)
            updateSnackbarMessage('Copied to clipboard')
            showSnackbar(true)
        } catch (err) {
            updateSnackbarMessage('Failed to copy')
            showSnackbar(false)
        }
    }, [])

    return (
        <Fragment>
            <Copy
                className="standalone-copy"
                onClick={() => requestCopy(event)}
            />
            <Highlight
                {...defaultProps}
                code={children as string}
                theme={isDark ? draculaTheme : githubTheme}
                language="jsx"
            >
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps
                }) => (
                    <code
                        className={`${className} standalone-code -highlighted`}
                        style={style}
                    >
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        ))}
                    </code>
                )}
            </Highlight>
            {isShowingSnackbar ? <Snackbar>{snackbarMessage}</Snackbar> : null}
        </Fragment>
    )
})

export default Code
