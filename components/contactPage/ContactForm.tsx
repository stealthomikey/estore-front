"use client";

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError(null);

    // Simple validation
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      setStatus('error');
      return;
    }

    // TODO: Replace with actual API or service integration
    try {
      // Simulate async sending
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('Failed to send message. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

      <label className="block mb-4">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </label>

      {status === 'error' && <p className="mb-4 text-red-600">{error}</p>}
      {status === 'success' && <p className="mb-4 text-green-600">Message sent successfully!</p>}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
