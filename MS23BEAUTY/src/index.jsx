import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Notification from "./components/Notification";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      
      <Navbar/>
      <main className="flex-grow">
        <section id="gallery" className="mt-24">
          <Carousel />
        </section>
        <Notification />
      </main>
      <Footer/>
    </div>
  );
}
