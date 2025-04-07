import React from 'react';
import Navbar from './components/navbar.jsx';
import LandingPage from './components/landingPage.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Eyes from './components/Eyes.jsx';
import Featured from './components/featured.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes/>
      <Featured/>
      <Footer/>
    </div>
  );
}
