import { Fragment } from 'react'

import dynamic from 'next/dynamic'

import { serialize, hook } from 'libs/serialize'

const Code = dynamic(() => import('components/blog/code')),
    HookTitle = dynamic(() => import('components/blog/hookTitle'))

const components = {
    h1: ({ children }) => (
        <Fragment>
            <mark className="marker" />
            <h1 id={serialize(children)} className="h1">
                {children}
                <HookTitle title={hook(children)} />
            </h1>
        </Fragment>
    ),
    h2: ({ children }) => (
        <Fragment>
            <mark className="marker -h2" />
            <h2 id={serialize(children)} className="h2">
                {children}
                <HookTitle title={hook(children)} on="h2" />
            </h2>
        </Fragment>
    ),
    p: ({ children }) => <p className="p">{children}</p>,
    a: ({ children, href }) => (
        <a href={href} rel="no-refferer no-reopener" className="a">
            {children}
        </a>
    ),
    pre: ({ children }) => {
        if (children.props.mdxType === 'code') return children

        return <pre className="pre">{children}</pre>
    },
    code: ({ children }) => <Code>{children}</Code>,
    li: ({ children }) => <li className="list">{children}</li>
}

export default components
