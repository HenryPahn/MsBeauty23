import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Promotion() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto p-4 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-center">
              <img src="/promotions/JunePromotion.png" alt="Summer Promotion" className="rounded-lg shadow-md h-full w-auto" />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h1 className="text-4xl font-Abril_Fatface mb-4 text-center md:text-left">Summer Promotion</h1>
              <p className="text-lg font-Montserrat mb-4">
                Summer is here, and so is our sizzling promotion!
                Treat your feet to perfection with our Regular Pedicure at just $38 or opt for our Shellac Pedicure for $53.
              </p>
              <p className="text-lg font-Montserrat mb-4">
                But wait, there's more to love! With any pedicure, enjoy our Deluxe package absolutely FREE (usually $20)! This package includes:
              </p>
              <ul className="list-disc list-inside mb-4 text-lg font-Montserrat">
                <li>Luxuriate in an exfoliating scrub</li>
                <li>A rejuvenating foot mask</li>
                <li>Extended massage bliss</li>
                <li>A soothing steaming session</li>
              </ul>
              <p className="text-lg font-Montserrat font-bold">
                Don't miss out on this unbeatable deal—reserve your spot now and step into summer with style!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

