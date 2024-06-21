import React, { useEffect, useState } from 'react';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { OTHER_SERVICES } from './utils/priceList';

export default function Eyelash_Waxing() {
  const [otherServices, setOtherServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://ms23beauty-backend.vercel.app/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ category: 'Other Services' }),
        });
        const data = await response.json();
        setOtherServices(data);
        console.log(data[0].services[0].serviceItems[0])
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      {otherServices.length && (
        <main className="flex-grow">
          <section className=" py-12 mt-20 md:mt-24" id='nails'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className='text-4xl mb-4 md:text-5xl md:mb-4 text-center font-Abril_Fatface'>Our Other Services</h1>
              {otherServices.map(category => (
                <div className="space-y-12">
                  {category.services.map((service, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-3xl font-Montserrat font-bold text-slate-800 my-3 mb-6 md:my-5 md:mb-10">{service.name}</h3>
                      <div className="space-y-6">
                        {service.servicesItems.map((item, idx) => (
                          <div key={idx} className="border-b border-gray-200 pb-4">
                            <div className="flex justify-between items-center">
                              <h4 className="text-lg font-Montserrat font-bold text-slate-800">{item.name}</h4>
                              <span className="text-lg text-white bg-black rounded-lg w-28 text-center">{item.price}</span>
                            </div>
                            <p className="text-gray-600 mt-3">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
      <Footer/>
    </div>
  )
}

