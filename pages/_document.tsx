import Document, { Html, Head, Main, NextScript } from 'next/document'

class MusicPlayerDocument extends Document {
    render() {
        return (
            <Html lang="th">
                <Head>
                    <meta name="title" content="Mystiar Blog" />
                    <meta name="description" content="เพราะว่าความรู้ คือกุญแจสู่อนาคต" />
                    <link rel="icon" href="/assets/icon/mystiar.png" />

                    <meta property="og:title" content="Mystiar Blog" />
                    <meta
                        property="og:description"
                        content="เพราะว่าความรู้ คือกุญแจสู่อนาคต"
                    />
                    <meta
                        property="og:image"
                        content={`https://blog.mystiar.com/assets/app/mystiar-blog.jpg`}
                    />
                    <meta property="og:image:width" content="1920" />
                    <meta property="og:image:height" content="1080" />
                    <meta property="og:site_name" content="Mystiar Blog" />
                    <meta property="og:locale" content="th_TH" />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Mystiar Blog"
                    />
                    <meta
                        name="twitter:description"
                        content="เพราะว่าความรู้ คือกุญแจสู่อนาคต"
                    />
                    <meta name="twitter:site" content="@SaltyAom" />
                    <meta
                        name="twitter:image"
                        content={`https://blog.mystiar.com/assets/app/mystiar-blog.jpg`}
                    />
                    <meta
                        name="twitter:creator"
                        content="@SaltyAom"
                    />

                    <link rel="sitemap" type="application/xml" href="/sitemap.xml"/>
                    <meta name="robots" content="index, follow"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MusicPlayerDocument