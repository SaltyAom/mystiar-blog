import { useEffect } from 'react'

import 'styles/init.styl'

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        const { initGA, logPageView } = require('libs/analytics'),
            { useRouter } = require('next/router')

        if(process.env.NODE_ENV === "production"){
            if (!window.GA_INITIALIZED) {
                initGA()
                window.GA_INITIALIZED = true
            }

            logPageView()

            let router = useRouter()
            router.events.on('routeChangeComplete', () => {
                logPageView()
            })
        }

        document.addEventListener('touchstart', () => null, false)

        if (
            'serviceWorker' in navigator &&
            process.env.NODE_ENV === 'production' &&
            typeof window !== 'undefined'
        )
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js', {
                    scope: '/'
                })
            })
    }, [])

    return <Component {...pageProps} />
}

export default App