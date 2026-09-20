'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    location: '',
    preferredExperience: '',
    package: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend
    console.log('Enquiry submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      eventType: '',
      eventDate: '',
      location: '',
      preferredExperience: '',
      package: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book" className="py-20 bg-ckr-black scroll-mt-20">
      <div className="max-w-ckr-container-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-ckr-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Enquiry
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ckr-ivory mb-4">
            Plan Your Event
          </h2>
          <p className="text-ckr-light-gray max-w-2xl mx-auto">
            Tell us about your event and we'll help you create an unforgettable robot entertainment experience.
          </p>
          <p className="text-ckr-medium-gray text-sm mt-3">
            Booking request — subject to robot availability and final confirmation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-ckr-charcoal rounded-xl p-8 sm:p-12 border border-ckr-gold/10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory placeholder-ckr-medium-gray focus:outline-none focus:border-ckr-gold/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory placeholder-ckr-medium-gray focus:outline-none focus:border-ckr-gold/50 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory placeholder-ckr-medium-gray focus:outline-none focus:border-ckr-gold/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory focus:outline-none focus:border-ckr-gold/50 transition-colors"
                >
                  <option value="">Select event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="school">School/College</option>
                  <option value="exhibition">Exhibition/Mall</option>
                  <option value="brand">Brand Activation</option>
                  <option value="grand-opening">Grand Opening</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory focus:outline-none focus:border-ckr-gold/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory placeholder-ckr-medium-gray focus:outline-none focus:border-ckr-gold/50 transition-colors"
                  placeholder="City and venue"
                />
              </div>

              <div>
                <label htmlFor="preferredExperience" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Preferred Experience
                </label>
                <select
                  id="preferredExperience"
                  name="preferredExperience"
                  value={formData.preferredExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory focus:outline-none focus:border-ckr-gold/50 transition-colors"
                >
                  <option value="">Select experience</option>
                  <option value="robot-dance">Robot Dance</option>
                  <option value="robot-greeting">Robot Greeting</option>
                  <option value="action-show">Action Show</option>
                  <option value="photo-experience">Photo Experience</option>
                  <option value="interactive">Interactive Experience</option>
                  <option value="grand-entrance">Grand Entrance</option>
                  <option value="robot-host">Robot Host</option>
                </select>
              </div>

              <div>
                <label htmlFor="package" className="block text-ckr-ivory text-sm font-medium mb-2">
                  Package Interest
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory focus:outline-none focus:border-ckr-gold/50 transition-colors"
                >
                  <option value="">Select package</option>
                  <option value="standard">Standard (₹9,999)</option>
                  <option value="medium">Medium (₹14,999)</option>
                  <option value="premium">Premium (₹24,999)</option>
                  <option value="signature">Signature (Custom)</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-ckr-ivory text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-ckr-black border border-ckr-gold/20 rounded-lg text-ckr-ivory placeholder-ckr-medium-gray focus:outline-none focus:border-ckr-gold/50 transition-colors resize-none"
                placeholder="Tell us more about your event requirements..."
              />
            </div>

            <div className="mb-6 p-4 bg-ckr-black/50 rounded-lg border border-ckr-gold/10">
              <p className="text-ckr-medium-gray text-xs">
                <strong className="text-ckr-gold">Note:</strong> This is an enquiry form, not instant booking. We will review your request and contact you to discuss robot availability, requirements, and provide a detailed quote. Final confirmation depends on robot availability and event feasibility.
              </p>
            </div>

            <Button
              type="submit"
              size="md"
              fullWidth
              className="w-full"
            >
              Submit Enquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
