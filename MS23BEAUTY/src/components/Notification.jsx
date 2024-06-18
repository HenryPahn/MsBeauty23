// components/Notification.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Notification() {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    visible && (
      <div className="bg-yellow-100 text-center p-4 text-lg font-Montserrat relative">
        <p className="font-bold">
          🔥 Summer Promotion is On! Treat your feet to perfection with our special deals.{' '}
          <a href="/promotion" className="underline">
            Learn More
          </a>{' '}
          🔥
        </p>
        <button 
          onClick={handleClose} 
          className="absolute top-0 right-0 p-2 flex items-center justify-center h-full md:mr-4"
          style={{ transform: 'translateY(-50%)', top: '50%' }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    )
  );
}
