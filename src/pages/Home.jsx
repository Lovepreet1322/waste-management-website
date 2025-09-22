import React, { useState } from 'react';
import { FaRecycle, FaTrash, FaShower, FaLeaf, FaUsers, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('segregation');
  const [showModal, setShowModal] = useState(false);

  const wasteCategories = [
    {
      id: 1,
      type: 'Organic Waste',
      color: '#22c55e', // green-500
      examples: 'Food scraps, garden waste',
      icon: <FaLeaf style={{ fontSize: 24, marginRight: 8 }} />
    },
    {
      id: 2,
      type: 'Recyclable Waste',
      color: '#3b82f6', // blue-500
      examples: 'Paper, plastic, glass, metal',
      icon: <FaRecycle style={{ fontSize: 24, marginRight: 8 }} />
    },
    {
      id: 3,
      type: 'Hazardous Waste',
      color: '#ef4444', // red-500
      examples: 'Batteries, chemicals, electronics',
      icon: <FaShower style={{ fontSize: 24, marginRight: 8 }} />
    },
    {
      id: 4,
      type: 'Residual Waste',
      color: '#6b7280', // gray-500
      examples: 'Non-recyclables, mixed materials',
      icon: <FaTrash style={{ fontSize: 24, marginRight: 8 }} />
    }
  ];

  const statsData = [
    { value: '75%', label: 'Recycling Rate' },
    { value: '1.2M', label: 'Tons Processed' },
    { value: '350', label: 'Communities Served' },
    { value: '40%', label: 'Reduction in Landfill' }
  ];

  // Common styles
  const containerStyle = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 16px',
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
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ecfdf5, #dbeafe)' }}>
      {/* Hero Section */}
      <header style={{
        background: 'linear-gradient(to right, #16a34a, #2563eb)',
        color: 'white',
        padding: '64px 16px',
        textAlign: 'center',
      }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 16 }}>
            Transforming Waste Management for a Cleaner Future
          </h1>
          <p style={{ fontSize: 20, marginBottom: 32, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Innovative solutions for waste segregation, disposal, and improved sanitation systems
          </p>
          <div style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => setShowModal(true)}
              style={{
                ...buttonBase,
                backgroundColor: 'white',
                color: '#16a34a',
                fontWeight: 'bold',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#dcfce7'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
            >
              Get Started
            </button>
            <button
              style={{
                ...buttonBase,
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
              }}
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section style={{ backgroundColor: 'white', padding: '48px 16px' }}>
        <div style={containerStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 24,
          }}>
            {statsData.map((stat, i) => (
              <div key={i} style={{
                backgroundColor: '#dcfce7',
                borderRadius: 12,
                padding: 24,
                textAlign: 'center',
              }}>
                <div style={{ fontSize: 28, fontWeight: 'bold', color: '#16a34a' }}>{stat.value}</div>
                <div style={{ color: '#4b5563' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section style={{ padding: '64px 16px' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48 }}>
            Our Waste Management Solutions
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 32 }}>
            {['segregation', 'disposal', 'sanitization'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  ...buttonBase,
                  borderRadius: 9999,
                  padding: '12px 24px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  backgroundColor: activeTab === tab ? '#16a34a' : '#e5e7eb',
                  color: activeTab === tab ? 'white' : '#374151',
                  cursor: 'pointer',
                }}
                onMouseOver={e => {
                  if (activeTab !== tab) e.currentTarget.style.backgroundColor = '#d1d5db';
                }}
                onMouseOut={e => {
                  if (activeTab !== tab) e.currentTarget.style.backgroundColor = '#e5e7eb';
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: 32,
            borderRadius: 24,
            boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
          }}>
            {activeTab === 'segregation' && (
              <>
                <h3 style={{ fontSize: 24, fontWeight: '600', marginBottom: 24, color: '#16a34a' }}>
                  Smart Waste Segregation
                </h3>
                <p style={{ color: '#374151', marginBottom: 24 }}>
                  Proper waste segregation is the first step toward effective waste management. Our system helps communities and businesses separate waste at the source, maximizing recycling potential and reducing landfill burden.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
                  <div style={{
                    backgroundColor: '#dcfce7',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12, display: 'flex', alignItems: 'center', color: '#15803d' }}>
                      <FaCheckCircle style={{ marginRight: 8 }} /> Benefits
                    </h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Increased recycling rates</li>
                      <li>Reduced contamination</li>
                      <li>Lower disposal costs</li>
                      <li>Environmental protection</li>
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#dbeafe',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12, display: 'flex', alignItems: 'center', color: '#2563eb' }}>
                      <FaUsers style={{ marginRight: 8 }} /> Community Impact
                    </h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Educational programs</li>
                      <li>Clear labeling systems</li>
                      <li>Color-coded bins</li>
                      <li>Regular collection schedules</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', fontSize: 20, marginBottom: 16 }}>Waste Categories</h4>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: 16,
                  }}>
                    {wasteCategories.map(cat => (
                      <div key={cat.id} style={{
                        backgroundColor: cat.color,
                        borderRadius: 16,
                        color: 'white',
                        padding: 16,
                        display: 'flex',
                        flexDirection: 'column',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8, fontWeight: '600', fontSize: 18 }}>
                          {cat.icon}
                          {cat.type}
                        </div>
                        <p style={{ fontSize: 14 }}>{cat.examples}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'disposal' && (
              <>
                <h3 style={{ fontSize: 24, fontWeight: '600', marginBottom: 24, color: '#16a34a' }}>
                  Eco-Friendly Disposal Methods
                </h3>
                <p style={{ color: '#374151', marginBottom: 24 }}>
                  Our disposal solutions prioritize environmental sustainability while ensuring efficient waste processing. We utilize advanced technologies to minimize environmental impact and maximize resource recovery.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                  <div style={{
                    backgroundColor: '#dcfce7',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12 }}>Processing Techniques</h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Composting organic waste</li>
                      <li>Material recovery facilities</li>
                      <li>Waste-to-energy conversion</li>
                      <li>Safe hazardous waste treatment</li>
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#dbeafe',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12 }}>Technology Integration</h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Smart bin sensors</li>
                      <li>Route optimization for collection</li>
                      <li>Landfill gas capture systems</li>
                      <li>Real-time monitoring</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'sanitization' && (
              <>
                <h3 style={{ fontSize: 24, fontWeight: '600', marginBottom: 24, color: '#16a34a' }}>
                  Improved Sanitation Systems
                </h3>
                <p style={{ color: '#374151', marginBottom: 24 }}>
                  We design and implement comprehensive sanitation solutions that promote public health, reduce pollution, and create cleaner living environments for communities.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
                  <div style={{
                    backgroundColor: '#dcfce7',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12 }}>Sanitation Solutions</h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Public sanitation facilities</li>
                      <li>Waste water treatment systems</li>
                      <li>Odor control technologies</li>
                      <li>Pest management programs</li>
                    </ul>
                  </div>

                  <div style={{
                    backgroundColor: '#dbeafe',
                    borderRadius: 16,
                    padding: 24,
                    flex: '1 1 300px',
                  }}>
                    <h4 style={{ fontWeight: '600', fontSize: 18, marginBottom: 12 }}>Health & Safety</h4>
                    <ul style={{ paddingLeft: 20, color: '#374151' }}>
                      <li>Reduced disease transmission</li>
                      <li>Worker safety protocols</li>
                      <li>Community health education</li>
                      <li>Emergency response plans</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
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
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24 }}>
            Join the Waste Management Revolution
          </h2>
          <p style={{ fontSize: 20, marginBottom: 32 }}>
            Together, we can create cleaner communities and a healthier planet through effective waste management practices.
          </p>
          <div style={{ display: 'inline-flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              style={{
                ...buttonBase,
                backgroundColor: 'white',
                color: '#16a34a',
                fontWeight: 'bold',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#dcfce7'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
            >
              Contact Us
            </button>
            <button
              style={{
                ...buttonBase,
                backgroundColor: 'transparent',
                border: '2px solid white',
                color: 'white',
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              Download Resources
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: 16,
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: 24,
            padding: 32,
            maxWidth: 400,
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <h3 style={{ fontSize: 24, fontWeight: '600', marginBottom: 16, color: '#16a34a' }}>
              Get Started with Waste Management
            </h3>
            <p style={{ color: '#374151', marginBottom: 24 }}>
              Fill out this form to learn how our waste management solutions can benefit your community or organization.
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <label style={{ fontWeight: '600', color: '#374151' }}>
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: 12,
                    marginTop: 4,
                    borderRadius: 8,
                    border: '1px solid #d1d5db',
                    fontSize: 16,
                    boxSizing: 'border-box',
                  }}
                />
              </label>

              <label style={{ fontWeight: '600', color: '#374151' }}>
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    width: '100%',
                    padding: 12,
                    marginTop: 4,
                    borderRadius: 8,
                    border: '1px solid #d1d5db',
                    fontSize: 16,
                    boxSizing: 'border-box',
                  }}
                />
              </label>

              <button
                type="submit"
                style={{
                  ...buttonBase,
                  backgroundColor: '#16a34a',
                  color: 'white',
                  fontWeight: 'bold',
                  marginTop: 8,
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#15803d'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#16a34a'}
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: 16,
                backgroundColor: 'transparent',
                border: 'none',
                color: '#6b7280',
                cursor: 'pointer',
                fontSize: 16,
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;