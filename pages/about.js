import Navbar from "../components/Navbar";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">
                            About
                        </h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores cum distinctio dolore enim esse hic illum iste itaque labore magnam molestias nam nobis rerum similique sit ut voluptas voluptatum.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}