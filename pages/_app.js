// This file ensures that the styles file becomes the entry point for application styling
import '../public/styles.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
