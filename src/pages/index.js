import Head from 'next/head';
import Main from '../app/components/Main';
import About from '../app/components/About';
import Skills from '../app/components/Skills';
import Projects from '../app/components/Projects';
import Footer from '../app/components/Footer';

export default function Home(){
    return(
        <div>
            <Head>
                <title>Chloé Morali</title>
                <meta name="description" content="generated by next app" />
                <link rel="icon" href="assets/CNMsquare.png" />
            </Head>
            <Main />
            <Projects />
            <Skills />
            <About />
            <Footer />
        </div>
    )
}