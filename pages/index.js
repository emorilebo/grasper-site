import Head from "next/head";
import About from "../components/About";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Grasper AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner and Hero */}
        <Banner />

        {/* About and Goals */}
        <About/>
        {/* Projects */}
        {/* Team */}
        {/* Testimonials */}
      </main>

      {/* Footer */}
    </div>
  );
}
