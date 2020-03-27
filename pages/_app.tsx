import App from 'next/app'

import 'styles/init.styl'

class Next extends App {
    componentDidMount() {
		const { initGA, logPageView } = require('libs/analytics'),
			{ useRouter } = require('next/router')

        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }

		logPageView()

		let router = useRouter()
		router.events.on("routeChangeComplete", () => {			
			logPageView()
		})

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
    }

    render() {
        let { Component, pageProps } = this.props

        return <Component {...pageProps} />
    }
}

export default Next
