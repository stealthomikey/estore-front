import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Contact Info</h2>

      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <MapPin className="text-green-600" />
          <span>Based Aberdeen, Scotland
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Phone className="text-green-600" />
          <a href="tel:+1234567890" className="hover:underline">+44 7484 1337896</a>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="text-green-600" />
          <a href="mailto:shop@michaelpiercey.com" className="hover:underline">shop@michaelpiercey.com</a>
        </li>
        <li className="flex items-center gap-3">
          <Clock className="text-green-600" />
          <span>Mon - Sat: 9am - 6pm</span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
