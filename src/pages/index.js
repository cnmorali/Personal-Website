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
                <title>Chloé | Computer Science & Engineering Graduate</title>
                <meta name="description" content="generated by next app" />
                <link rel="icon" href="/flavicon.ico" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}