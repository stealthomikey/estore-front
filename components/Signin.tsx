import React, { useState } from 'react';
import Image from 'next/image';
import { blog } from '@/images'; // construction meme image

const Signin = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="text-sm font-semibold text-lightColor hover:text-darkColor hoverEffect hover:cursor-pointer"
      >
        Login
      </button>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-sm w-full relative p-5 text-center">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-lg font-semibold mb-2">Login Under Construction</h2>
            <p className="text-sm text-gray-600 mb-4">Coming soon!</p>
            <div className="w-full h-48 relative rounded overflow-hidden">
              <Image
                src={blog}
                alt="Under Construction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signin;
