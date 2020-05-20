import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
// ---------------------------------------------
export default class CustomDocument extends Document {
    render() {
        return (<html lang='en-US'>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="theme-light">
                <Main />
                <NextScript />
            </body>
        </html>)
    }
}