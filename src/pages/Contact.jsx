import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaMap, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});

  // Contact info data
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt style={{ fontSize: 24, color: '#16a34a' }} />,
      title: 'Our Address',
      details: '123 Green Street, Eco City, EC 12345',
      link: 'https://maps.google.com/?q=123+Green+Street,+Eco+City'
    },
    {
      icon: <FaPhone style={{ fontSize: 24, color: '#16a34a' }} />,
      title: 'Phone Number',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <FaEnvelope style={{ fontSize: 24, color: '#16a34a' }} />,
      title: 'Email Address',
      details: 'info@wastemanagement.com',
      link: 'mailto:info@wastemanagement.com'
    },
    {
      icon: <FaClock style={{ fontSize: 24, color: '#16a34a' }} />,
      title: 'Business Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM<br>Sat: 9:00 AM - 4:00 PM<br>Sun: Closed'
    }
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Simple validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  // Handle form submission (simulate API call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API submission (replace with real fetch/post in production)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Fake delay
      // In real app: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      console.log('Form submitted:', formData); // Log for demo
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Common styles (matching previous pages)
  const containerStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
  };

  const sectionStyle = {
    padding: '64px 16px',
    backgroundColor: '#ecfdf5', // light green bg
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: 24,
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: 14,
    marginTop: -8,
    marginBottom: 8,
  };

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    border: 'none',
    padding: '12px 32px',
    borderRadius: 9999,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ecfdf5, #dbeafe)', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Header */}
      <header style={{
        background: 'linear-gradient(to right, #16a34a, #2563eb)',
        color: 'white',
        padding: '80px 16px',
        textAlign: 'center',
      }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 42, fontWeight: 'bold', marginBottom: 16 }}>
            Get In Touch With Us
          </h1>
          <p style={{ fontSize: 20, marginBottom: 32, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            Have questions about our waste management services? We'd love to hear from you. Fill out the form below or reach us directly.
          </p>
          <FaPaperPlane style={{ fontSize: 64, margin: '0 auto', display: 'block' }} />
        </div>
      </header>

      {/* Contact Info Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Contact Information
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 24,
          }}>
            {contactInfo.map((info, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ marginBottom: 16 }}>{info.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: '600', marginBottom: 8, color: '#15803d' }}>
                  {info.title}
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6, marginBottom: info.link ? 12 : 0 }}>
                  <span dangerouslySetInnerHTML={{ __html: info.details }} />
                </p>
                {info.link && (
                  <a
                    href={info.link}
                    style={{
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontWeight: 500,
                      display: 'inline-block',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.title === 'Phone Number' ? 'Call Now' : info.title === 'Email Address' ? 'Send Email' : 'View on Map'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8fafc' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Send Us a Message
          </h2>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: 16, padding: 32, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              {/* Name */}
              <div style={{ marginBottom: 16 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? '#ef4444' : '#d1d5db',
                  }}
                  required
                />
                {errors.name && <p style={errorStyle}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? '#ef4444' : '#d1d5db',
                  }}
                  required
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: 16 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    borderColor: errors.subject ? '#ef4444' : '#d1d5db',
                  }}
                  required
                />
                {errors.subject && <p style={errorStyle}>{errors.subject}</p>}
              </div>

              {/* Message */}
              <div style={{ marginBottom: 24 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    borderColor: errors.message ? '#ef4444' : '#d1d5db',
                  }}
                  required
                />
                {errors.message && <p style={errorStyle}>{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  ...buttonStyle,
                  width: '100%',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div style={{ marginTop: 16, padding: 12, backgroundColor: '#dcfce7', borderRadius: 8, color: '#15803d', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <FaCheckCircle /> Thank you! Your message has been sent. We'll respond soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ marginTop: 16, padding: 12, backgroundColor: '#fef2f2', borderRadius: 8, color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <FaExclamationTriangle /> Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Find Us on the Map
          </h2>
          <div style={cardStyle}>
            <FaMap style={{ fontSize: 48, color: '#22c55e', marginBottom: 16, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            <p style={{ color: '#374151', textAlign: 'center', marginBottom: 24 }}>
              Visit our location or get directions using the map below.
            </p>
            {/* Simple Google Maps iframe - replace with your actual location */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.142347!2d-73.987319!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1630000000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location Map"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        backgroundColor: '#16a34a',
        color: 'white',
        padding: '64px 16px',
        textAlign: 'center',
      }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24 }}>
            Let's Work Together for a Cleaner Tomorrow
          </h2>
          <p style={{ fontSize: 18, marginBottom: 32 }}>
            Your inquiry is important to us. Expect a response within 24-48 hours.
          </p>
          <button style={{
            backgroundColor: 'white',
            color: '#16a34a',
            fontWeight: 'bold',
            padding: '12px 32px',
            borderRadius: 9999,
            border: 'none',
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#dcfce7'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            Call Us Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;