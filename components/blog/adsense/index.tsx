import { Fragment } from 'react'

import Head from 'next/head'

declare global {
    interface Window {
        adsbygoogle: any
    }
}

const Adsense = ({ content }) => {
    // useEffect(() => {
    //     window.adsbygoogle = window.adsbygoogle || []
    //     window.adsbygoogle.push({})
    // }, [])

    return (
        <Fragment>
            <Head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html:
                            '(adsbygoogle = window.adsbygoogle || []).push({});',
                    }}
                />
            </Head>
            <ins
                className="adsbygoogle"
                key={content}
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-8437449592660799"
                data-ad-slot="6199709868"
                full-width = 
            />
        </Fragment>
    )
}

export default Adsense
