import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeConfig from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeConfig>
            <Component {...pageProps} />
        </ThemeConfig>
    )
}

export default MyApp
