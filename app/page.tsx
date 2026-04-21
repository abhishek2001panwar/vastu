import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Stats from './components/Stats';
import AboutVastu from './components/AboutVastu';
import Cta from './components/Cta';
import Why from './components/Why';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e27]">
      <Hero />
      <About />
      <Service />
      <Stats />
      <AboutVastu />
      <Cta />
      <Why />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}