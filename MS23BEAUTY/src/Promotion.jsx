import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Warning from "./components/Warning"

export default function Promotion() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-16 md:mt-20 lg:mt-24">
        <div className="flex flex-col items-center text-center mt-6 mb-6 md:mt-10 md:mb-10">
          <h1 className="text-4xl mb-4 md:text-5xl md:mb-4 font-Abril_Fatface">Free Delux Pedicure!</h1>
          <video className="md:w-8/12 2xl:w-4/12 pl-8 pr-8" controls autoPlay muted>
            <source src="/promotions/DeluxPedicure.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <img
            src="/promotions/AprilPromotion.png"
            alt="Winter 2025 Promotion"
            className="md:w-8/12 2xl:w-4/12 lg:mt-7 pl-8 pr-8"
          />
        </div>
      </div>

      <Warning />
      <Footer />
    </div>
  )
}