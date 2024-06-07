import { useRef } from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"

export default function App() {
  const formRef = useRef(null);

  const scrollToFooter = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToFooter={scrollToFooter} />
      <main className="flex-grow">
        <section className="bg-gray-50 py-10 md:py-12 mt-20 md:mt-24" id='promotions'>
          <div className="text-center">
            <h2 className="text-xl md:text-3xl font-extrabold text-slate-500 mb-8 md:my-10">Check out our latest promotion</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
              <div className="flex justify-center md:justify-end items-center p-0">
                <img src="/promotions/buy3get1.jpeg" alt="Promotion 1" className="w-2/4 h-auto rounded-lg" />
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <img src="/promotions/promotion-now.jpeg" alt="Promotion 2" className="w-2/4 h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="gallery">
          <Carousel />
        </section>
      </main>
      <Footer formRef={formRef} />
    </div>
  );
}
