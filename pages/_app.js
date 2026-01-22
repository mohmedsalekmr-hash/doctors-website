import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>SmilePro - Premium Dental Clinic</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
