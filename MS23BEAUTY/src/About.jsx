import { useRef } from 'react';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function About() {
  const formRef = useRef(null);

  const scrollToFooter = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToFooter={scrollToFooter} />
      <main className="font-rubik flex-grow">
        <div className='p-5 mt-20 md:p-auto md:grid md:grid-cols-2 md:mt-24 md:p-24 md:gap-4'>
          <div>
            <img className='md:flex md:justitfy-center' src='store.jpg' alt='store' />
          </div>
          <div className='md:place-content-center md:text-justify'>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2023, MS23 BEAUTY CARE is your sanctuary for relaxation and rejuvenation. Our expert technicians specialize in delivering exceptional manicure and pedicure services, customized to each client’s specific needs. Enjoy our serene and clean environment as you escape the daily stresses and let our friendly staff pamper you. Whether you prefer classic manicures or the latest in nail art trends, we have something for everyone.              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to our nail services, MS23 provides personalized lash and brow treatments, ensuring both beauty and health are maintained. Our highly trained and certified professionals use only top-quality products to give you the best results.              </p>
            </div>

          </div>
        </div>

      </main>
      <Footer formRef={formRef} />
    </div>
  )
}

