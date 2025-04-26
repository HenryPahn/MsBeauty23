import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Policy() {
    return (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <section className="py-12 mt-20 md:mt-24">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl text-center font-Abril_Fatface mb-10">Service Guarantee Notice</h1>
    
                <p className="text-center text-gray-700 mb-10">At our salon, your satisfaction is our top priority. We are pleased to offer a <span className="font-semibold">7-day guarantee</span> on all services to ensure your peace of mind. This guarantee covers both our workmanship and the quality of materials used—at no additional cost.</p>
    
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Covered Services:</h2>
                    <ul className="list-disc list-inside space-y-3">
                      <li><span className="font-semibold">Bio Gel Overlay / Refill / Extension:</span> Lifting, chipping, popping off, or breakage</li>
                      <li><span className="font-semibold">Nail Designs:</span> Chipping, chrome peeling, or detached charms</li>
                      <li><span className="font-semibold">Shellac / Gel Services:</span> Lifting or chipping</li>
                    </ul>
                  </div>
    
                  <p className="text-gray-700">If any of the above issues occur within 7 days of your appointment, we will gladly fix them free of charge.</p>
    
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Outside Guarantee Period:</h2>
                    <p className="text-gray-700 mb-6">Should any issues arise <span className="font-semibold">after the 7-day guarantee period</span>, we are still happy to assist you at the following rates (designs not included):</p>
                    <ul className="list-disc list-inside space-y-3">
                      <li><span className="font-semibold">Bio Gel Nails:</span> $10 per finger</li>
                      <li><span className="font-semibold">Gel / Shellac Nails:</span> $5 per finger</li>
                    </ul>
                  </div>
    
                  <p className="text-gray-700">We sincerely appreciate your understanding and continued support. Our team is dedicated to delivering the highest quality service and care.</p>
                  <p className="text-gray-700">Thank you for choosing us!</p>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      );
}

