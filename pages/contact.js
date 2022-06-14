import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">
                            Contact
                        </h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        </p>
                        <ul className="contact-links">
                            <li className="contact-item">Email: yourname@email.com</li>
                            <li className="contact-item">Phone: +12345678</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}