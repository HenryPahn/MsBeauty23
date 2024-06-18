import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { NAIL_SERVICES } from './utils/priceList';

export default function Nails() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className=" py-12 mt-20 md:mt-24" id='nails'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className='text-4xl mb-4 md:text-5xl md:mb-4 text-center font-Abril_Fatface'>Our Nail Services</h1>
            <div className="space-y-12">
              {NAIL_SERVICES.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-3xl font-Montserrat font-bold text-slate-800 my-3 mb-6 md:my-5 md:mb-10">{category.name}</h3>
                  <div className="space-y-6">
                    {category.servicesItems.map((service, idx) => (
                      <div key={idx} className="border-b border-gray-200 pb-4">
                        <div className="flex justify-between items-center">
                          <h4 className="text-lg font-Montserrat font-bold text-slate-800">{service.name}</h4>
                          <span className="text-lg text-white bg-black rounded-lg w-28 text-center">{service.price}</span>
                        </div>
                        <p className="text-gray-600 mt-3">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

