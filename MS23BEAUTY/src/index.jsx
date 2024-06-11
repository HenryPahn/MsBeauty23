import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        {/* <section className="bg-gray-50 py-10 mt-24 md:py-20" id='promotions'>
          <div className="text-center">
            <h1 className='text-4xl mb-4 md:text-5xl md:mb-4 font-Abril_Fatface'>OUR PROMOTIONS</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
              <div className="flex justify-center md:justify-end items-center p-0">
                <img src="/promotions/buy3get1.jpeg" alt="Promotion 1" className="w-11/12 md:w-2/4 h-auto rounded-lg" />
              </div>
              <div className="flex justify-center md:justify-start items-center">
                <img src="/promotions/promotion-now.jpeg" alt="Promotion 2" className="w-11/12 md:w-2/4 h-auto rounded-lg" />
              </div>
            </div>
          </div>
        </section> */}
        <section id="gallery" className="mt-24">
          <Carousel />
        </section>
      </main>
      <Footer/>
    </div>
  );
}
