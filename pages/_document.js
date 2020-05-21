import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { appWithTranslation, i18n } from '../i18n'
// ---------------------------------------------
export default class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const {
            res: { locals },
        } = ctx;
        const additionalProps = {
            languageDirection: locals.languageDirection,
            language: i18n.language,
        };

        return { ...initialProps, ...additionalProps };
    }

    render() {
        const { languageDirection, language } = this.props;

        return (<html lang={language} dir={languageDirection}>
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