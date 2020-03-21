import { Fragment } from 'react'

import Head from 'next/head'

import 'styles/landing.styl'

const Landing = () => (
    <Fragment>
        <Head>
            <title>Mystiar Blog</title>
        </Head>
        <main id="under-construction">
            <figure className="figure">
                <img
                    className="image"
                    src="/assets/under-construction.gif"
                    alt="Shaw"
                    />
            </figure>
            <h1 className="title">Underconstruction</h1>
        </main>
    </Fragment>
)

export default Landing
