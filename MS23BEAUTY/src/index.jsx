import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Carousel from "./components/Carousel"
import Notification from "./components/Notification";

export default function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <section id="gallery" className="2xl:mt-32 2xl:mb-16">
          <Carousel />
        </section>
      </main>
      <Notification />
      <Footer/>
    </div>
  );
}
