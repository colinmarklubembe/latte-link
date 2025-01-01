"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatsNew from "../components/WhatsNew";
import ConnectAndThrive from "../components/ConnectAndThrive";
import WhoIsLatteLinkFor from "../components/WhoIsLatteLinkFor";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <WhatsNew />
        <ConnectAndThrive />
        <WhoIsLatteLinkFor />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
