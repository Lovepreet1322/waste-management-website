import React, { useState } from 'react';
import { FaRecycle, FaShower, FaLeaf, FaTruck, FaChartLine, FaUsers, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState('segregation'); // For tabbed service details

  // Data for main services overview
  const servicesOverview = [
    {
      id: 'segregation',
      title: 'Waste Segregation',
      description: 'Expert guidance on sorting waste at source with color-coded systems and educational tools.',
      icon: <FaRecycle style={{ fontSize: 48, color: '#22c55e' }} />,
      color: '#22c55e'
    },
    {
      id: 'collection',
      title: 'Collection & Disposal',
      description: 'Efficient pickup schedules with GPS-tracked vehicles for timely and eco-friendly transport.',
      icon: <FaTruck style={{ fontSize: 48, color: '#3b82f6' }} />,
      color: '#3b82f6'
    },
    {
      id: 'sanitization',
      title: 'Sanitation Services',
      description: 'Comprehensive cleaning and disinfection of waste areas to maintain public health standards.',
      icon: <FaShower style={{ fontSize: 48, color: '#ef4444' }} />,
      color: '#ef4444'
    },
    {
      id: 'recycling',
      title: 'Recycling Programs',
      description: 'Customized recycling initiatives that turn waste into resources, boosting sustainability.',
      icon: <FaLeaf style={{ fontSize: 48, color: '#10b981' }} />,
      color: '#10b981'
    },
    {
      id: 'hazardous',
      title: 'Hazardous Waste Handling',
      description: 'Safe management of dangerous materials with certified protocols and compliance assurance.',
      icon: <FaShieldAlt style={{ fontSize: 48, color: '#f59e0b' }} />,
      color: '#f59e0b'
    },
    {
      id: 'consulting',
      title: 'Consulting & Training',
      description: 'Tailored advice and workshops for businesses and communities on best waste practices.',
      icon: <FaUsers style={{ fontSize: 48, color: '#8b5cf6' }} />,
      color: '#8b5cf6'
    }
  ];

  // Detailed content for each service (tabbed view)
  const serviceDetails = {
    segregation: {
      title: 'Smart Waste Segregation Solutions',
      intro: 'We help you implement effective segregation systems right from the point of generation.',
      features: [
        'Color-coded bins for easy identification',
        'On-site training for staff and residents',
        'Digital tracking apps for compliance',
        'Customized plans for homes, offices, and industries'
      ],
      benefits: 'Reduces contamination by 70% and increases recycling efficiency.'
    },
    collection: {
      title: 'Reliable Collection and Disposal',
      intro: 'Our fleet ensures waste is collected on schedule and disposed of responsibly.',
      features: [
        'Daily/weekly pickup options',
        'GPS-monitored routes for optimization',
        'Secure transport for all waste types',
        'Real-time updates via mobile app'
      ],
      benefits: 'Minimizes overflow issues and ensures 100% compliance with local regulations.'
    },
    sanitization: {
      title: 'Professional Sanitation and Cleaning',
      intro: 'Keep your spaces clean and odor-free with our specialized sanitation services.',
      features: [
        'Deep cleaning of bins and collection points',
        'Eco-friendly disinfectants and deodorizers',
        'Pest control integration',
        'Post-event cleanup for large gatherings'
      ],
      benefits: 'Improves public health and enhances community living standards.'
    },
    recycling: {
      title: 'Comprehensive Recycling Programs',
      intro: 'Transform your waste into valuable resources through our recycling expertise.',
      features: [
        'Partnerships with recycling facilities',
        'Material sorting and processing',
        'Reporting on recycled volumes',
        'Incentives for high-recycling participants'
      ],
      benefits: 'Supports circular economy and reduces landfill use by up to 50%.'
    },
    hazardous: {
      title: 'Certified Hazardous Waste Management',
      intro: 'Handle dangerous waste safely with our specialized, compliant services.',
      features: [
        'EPA/OSHA certified handling',
        'Specialized containment and transport',
        'Disposal at approved facilities',
        'Documentation and audit support'
      ],
      benefits: 'Protects the environment and avoids costly fines or liabilities.'
    },
    consulting: {
      title: 'Expert Consulting and Education',
      intro: 'Get personalized guidance to optimize your waste management strategies.',
      features: [
        'Waste audits and assessments',
        'Sustainability workshops and seminars',
        'Policy development assistance',
        'Ongoing support and monitoring'
      ],
      benefits: 'Empowers your team with knowledge for long-term sustainability.'
    }
  };

  // Common styles (reused from home/about pages)
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
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const buttonBase = {
    borderRadius: 9999,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    padding: '12px 24px',
    fontSize: 16,
    transition: 'background-color 0.3s ease',
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
            Our Comprehensive Services
          </h1>
          <p style={{ fontSize: 20, marginBottom: 32, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            From segregation to sustainable disposal, we offer end-to-end waste management solutions tailored to your needs.
          </p>
          <FaRecycle style={{ fontSize: 64, margin: '0 auto', display: 'block' }} />
        </div>
      </header>

      {/* Services Overview Grid */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Explore Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {servicesOverview.map((service) => (
              <div
                key={service.id}
                style={{
                  ...cardStyle,
                  borderTop: `4px solid ${service.color}`,
                  cursor: 'pointer',
                }}
                onClick={() => setActiveService(service.id)}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 12, color: service.color }}>
                  {service.title}
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service View (Tabbed) */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8fafc' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Service Details
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {servicesOverview.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                style={{
                  ...buttonBase,
                  backgroundColor: activeService === service.id ? service.color : '#e5e7eb',
                  color: activeService === service.id ? 'white' : '#374151',
                  textTransform: 'capitalize',
                }}
                onMouseOver={e => {
                  if (activeService !== service.id) e.currentTarget.style.backgroundColor = '#d1d5db';
                }}
                onMouseOut={e => {
                  if (activeService !== service.id) e.currentTarget.style.backgroundColor = '#e5e7eb';
                }}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          {servicesOverview.map((service) => (
            activeService === service.id && (
              <div key={service.id} style={cardStyle}>
                <h3 style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 16, color: service.color }}>
                  {serviceDetails[service.id].title}
                </h3>
                <p style={{ color: '#374151', fontSize: 18, marginBottom: 24, lineHeight: 1.6 }}>
                  {serviceDetails[service.id].intro}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 24 }}>
                  <div style={{ flex: '1 1 300px' }}>
                    <h4 style={{ fontWeight: '600', fontSize: 20, marginBottom: 12, display: 'flex', alignItems: 'center', color: '#15803d' }}>
                      <FaCheckCircle style={{ marginRight: 8 }} /> Key Features
                    </h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      {serviceDetails[service.id].features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: 8 }}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ flex: '1 1 300px' }}>
                    <h4 style={{ fontWeight: '600', fontSize: 20, marginBottom: 12, color: '#2563eb' }}>
                      <FaChartLine style={{ marginRight: 8 }} /> Benefits
                    </h4>
                    <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.6, fontStyle: 'italic' }}>
                      {serviceDetails[service.id].benefits}
                    </p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Stats/Impact Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Why Choose Our Services?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}>
            <div style={cardStyle}>
              <FaLeaf style={{ fontSize: 48, color: '#22c55e', marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Eco-Friendly</h3>
              <p style={{ color: '#374151' }}>All services prioritize sustainability and minimal environmental impact.</p>
            </div>
            <div style={cardStyle}>
              <FaTruck style={{ fontSize: 48, color: '#3b82f6', marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Reliable & Timely</h3>
              <p style={{ color: '#374151' }}>Guaranteed on-time service with modern tracking technology.</p>
            </div>
            <div style={cardStyle}>
              <FaShieldAlt style={{ fontSize: 48, color: '#ef4444', marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Compliant & Safe</h3>
              <p style={{ color: '#374151' }}>Fully licensed and insured for peace of mind.</p>
            </div>
            <div style={cardStyle}>
              <FaUsers style={{ fontSize: 48, color: '#10b981', marginBottom: 16 }} />
              <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>Customized</h3>
              <p style={{ color: '#374151' }}>Tailored solutions for residential, commercial, and industrial clients.</p>
            </div>
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
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: 18, marginBottom: 32 }}>
            Contact us today for a free consultation on how our services can transform your waste management.
          </p>
          <button style={{
            ...buttonBase,
            backgroundColor: 'white',
            color: '#16a34a',
            fontWeight: 'bold',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#dcfce7'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
          >
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;