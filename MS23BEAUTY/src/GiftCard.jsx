import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function GiftCard() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <h1 className='mt-40'>This is gift card page</h1>
      </main>
      <Footer/>
    </div>
  )
}

