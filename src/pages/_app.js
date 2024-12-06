import { Component } from "react";
import Navbar from "../app/components/Navigation";
import '../app/globals.css';


function MyApp({ Component, pageProps }) {
    return (
        <>
        <Navbar />
        <Component {...pageProps} />
        </>
    );
}

export default MyApp;