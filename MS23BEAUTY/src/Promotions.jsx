import { useRef } from 'react';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Promotions() {
  const formRef = useRef(null);

  const scrollToFooter = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrollToFooter={scrollToFooter} />
      <main className="flex-grow">
        <h1 className='mt-40'>This is promotion page</h1>
      </main>
      <Footer formRef={formRef} />
    </div>
  )
}

