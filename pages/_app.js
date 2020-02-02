import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/fontawesome.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';

import { Preloader, Placeholder } from 'react-preloading-screen';
import App, {Container} from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <DefaultSeo
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://genial-react.envytheme.com/',
                        site_name: 'Genial - React Next Multi-Niche Landing Templates',
                    }}
                />

                <Preloader>
                    <Component {...pageProps} />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                    <Placeholder>
                        <Loader />
                    </Placeholder>
                </Preloader>
            </Container>
        );
    }
}