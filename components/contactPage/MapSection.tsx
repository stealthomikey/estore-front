import React from 'react';

const MapSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 rounded-md overflow-hidden shadow-md">
      <iframe
        title="The cat lab"
        src="https://maps.google.com/maps?q=Robert%20Gordon%20University%2C%20Aberdeen%2C%20Scotland&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        loading="lazy"
        className="border-0"
      />
    </div>
  );
};

export default MapSection;
