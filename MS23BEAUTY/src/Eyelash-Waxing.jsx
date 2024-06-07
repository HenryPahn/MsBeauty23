import { useRef } from 'react';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { OTHER_SERVICES } from './utils/priceList';

export default function Eyelash_Waxing() {
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
        <section className="bg-gray-50 py-12 mt-20 md:mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-slate-500 text-center mb-10 md:my-10">Our Other Services</h2>
            <div className="space-y-12">
              {OTHER_SERVICES.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-6">{category.desciption}</p>
                  <div className="space-y-6">
                    {category.servicesItems.map((service, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-semibold text-slate-800">{service.name}</h4>
                          <span className="text-lg text-slate-600">{service.price}</span>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer formRef={formRef} />
    </div>
  )
}

