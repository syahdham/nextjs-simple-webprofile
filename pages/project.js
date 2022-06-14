import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Project() {
    return (
        <>
            <Head>
                <title>Project</title>
            </Head>
            <Navbar/>
            <section className="hero">
                <div className="container">
                    <div className="text-wrapper w-full">
                        <h1 className="title">
                            Portfolio
                        </h1>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                        <div className="project-wrapper">
                            <div className="project-item">
                                <img className="project-image"
                                    src="https://img.freepik.com/free-psd/website-presentation-mockup-isolated_359791-179.jpg?t=st=1655108584~exp=1655109184~hmac=ca0a1dae5493a1c0977f26e04262899456e1f78590a683c5f3bcaa3926f9e335&w=1380" />
                                <h4 className="project-name">Project Name</h4>
                                <div className="project-category">Mobile Dev</div>
                            </div>
                            <div className="project-item">
                                <img className="project-image"
                                     src="https://img.freepik.com/free-psd/website-presentation-mockup-isolated_359791-179.jpg?t=st=1655108584~exp=1655109184~hmac=ca0a1dae5493a1c0977f26e04262899456e1f78590a683c5f3bcaa3926f9e335&w=1380" />
                                <h4 className="project-name">Project Name</h4>
                                <div className="project-category">Web Dev</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}