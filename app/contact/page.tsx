import React from 'react';
import Container from '@/components/Container'; // your existing Container
import ContactForm from '@/components/contactPage/ContactForm';
import ContactInfo from '@/components/contactPage/ContactInfo';
import MapSection from '@/components/contactPage/MapSection';

const ContactPage: React.FC = () => {
  return (
    <Container className="py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Get In Touch</h1>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
        <div className="flex-1">
          <ContactForm />
        </div>

        <div className="flex-1 flex flex-col gap-10">
          <ContactInfo />
          <MapSection />
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
