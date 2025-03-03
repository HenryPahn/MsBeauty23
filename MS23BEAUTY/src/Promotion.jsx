import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Warning from "./components/Warning"

export default function Promotion() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center px-8 py-12 mt-20 md:mt-24 space-y-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl mb-4 md:text-5xl md:mb-4 font-Abril_Fatface">Unwrap the Mystery!</h1>
          <img
            src="/promotions/Winter2025Promotion.png"
            alt="Winter 2025 Promotion"
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col items-center text-center pt-28">
          <h1 className="text-4xl mb-4 md:text-5xl md:mb-4 font-Abril_Fatface">Exclusive Discounts on Eyelash Services!</h1>
          <img
            src="/promotions/EyelashPromotion.png"
            alt="Winter 2025 Promotion"
            className="rounded-lg shadow-md size-5/12"
          />
        </div>
      </div>
      
      <Warning/>
      <Footer />
    </div>
  )
}