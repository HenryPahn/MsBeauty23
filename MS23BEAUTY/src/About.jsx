import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="font-Montserrat flex-grow">
        <div className="flex flex-col items-center justify-center my-24">
          <div className="relative w-11/12 md:w-10/12">
            <img src="store.jpg" alt="About Us" className="" />
            <div className="md:absolute inset-0 md:bg-black md:bg-opacity-50 flex items-center justify-center">
              <p className="text-black md:text-white text-justify font-bold font-Montserrat p-4 md:text-3xl">
                Founded in 2023, MS23 BEAUTY CARE is your sanctuary for relaxation and rejuvenation. Our expert technicians specialize in delivering exceptional manicure and pedicure services, customized to each client’s specific needs. Enjoy our serene and clean environment as you escape the daily stresses and let our friendly staff pamper you. Whether you prefer classic manicures or the latest in nail art trends, we have something for everyone.
                <br /><br />
                In addition to our nail services, MS23 provides personalized lash and brow treatments, ensuring both beauty and health are maintained. Our highly trained and certified professionals use only top-quality products to give you the best results.
              </p>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}

