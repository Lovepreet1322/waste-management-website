import { FaUsers, FaLeaf, FaRecycle, FaChartLine, FaHandshake, FaBuilding } from 'react-icons/fa';

const About = () => {
  //const [activeSection, setActiveSection] = useState('story'); // simple state for sections if needed later

  // some data for team members - keeping it simple
  const teamMembers = [
    { name: 'Dr. Sarah Green', role: 'Founder & CEO', bio: 'Environmental scientist with 15+ years in waste management.' },
    { name: 'Mike Rivera', role: 'Operations Director', bio: 'Expert in logistics and sustainable disposal systems.' },
    { name: 'Lisa Chen', role: 'Sustainability Lead', bio: 'Focuses on community education and recycling programs.' },
    { name: 'Tom Patel', role: 'Tech Specialist', bio: 'Develops smart waste tracking technologies.' }
  ];

  // common styles to reuse
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
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ecfdf5, #dbeafe)', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero/About Header */}
      <header style={{
        background: 'linear-gradient(to right, #16a34a, #2563eb)',
        color: 'white',
        padding: '80px 16px',
        textAlign: 'center',
      }}>
        <div style={containerStyle}>
          <h1 style={{ fontSize: 42, fontWeight: 'bold', marginBottom: 16 }}>
            About Our Waste Management Journey
          </h1>
          <p style={{ fontSize: 20, marginBottom: 32, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
            We're dedicated to creating sustainable solutions for waste segregation, disposal, and sanitation. 
            Our story is about turning challenges into opportunities for a cleaner world.
          </p>
          <FaLeaf style={{ fontSize: 48, margin: '0 auto', display: 'block' }} />
        </div>
      </header>

      {/* Our Story Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Our Story
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={cardStyle}>
                <h3 style={{ fontSize: 24, fontWeight: '600', marginBottom: 16, color: '#15803d' }}>
                  <FaBuilding style={{ marginRight: 8 }} /> Founded in 2025
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6 }}>
                  It all started in a small community facing waste overflow issues. We saw the need for better segregation 
                  and disposal methods, so we built our first smart bin system. Today, we've grown to serve hundreds of 
                  communities with innovative sanitation solutions that reduce landfill waste by up to 40%.
                </p>
                <p style={{ color: '#374151', marginTop: 16, fontStyle: 'italic' }}>
                  "Waste is a resource in disguise" - Our motto since day one.
                </p>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <FaRecycle style={{ fontSize: 120, color: '#22c55e' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8fafc' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Our Mission & Vision
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <div style={cardStyle}>
                <h3 style={{ fontSize: 22, fontWeight: '600', marginBottom: 16, color: '#2563eb' }}>
                  <FaHandshake style={{ marginRight: 8 }} /> Mission
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6 }}>
                  To empower communities with accessible waste management tools that promote segregation at source, 
                  safe disposal practices, and enhanced sanitation. We aim to reduce environmental impact while 
                  educating and engaging people in sustainable living.
                </p>
              </div>
            </div>
            <div style={{ flex: '1 1 400px' }}>
              <div style={cardStyle}>
                <h3 style={{ fontSize: 22, fontWeight: '600', marginBottom: 16, color: '#2563eb' }}>
                  <FaChartLine style={{ marginRight: 8 }} /> Vision
                </h3>
                <p style={{ color: '#374151', lineHeight: 1.6 }}>
                  A world where waste is minimized, resources are recycled efficiently, and every community enjoys 
                  clean, healthy environments. We envision zero-waste cities through technology and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Meet Our Team
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={cardStyle}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
                  <FaUsers style={{ fontSize: 24, color: '#16a34a', marginRight: 12 }} />
                  <h3 style={{ fontSize: 20, fontWeight: '600', margin: 0 }}>{member.name}</h3>
                </div>
                <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 8, fontWeight: '500' }}>
                  {member.role}
                </p>
                <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.5 }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact/Achievements */}
      <section style={{ ...sectionStyle, backgroundColor: '#f8fafc' }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 48, color: '#16a34a' }}>
            Our Impact So Far
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
            <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={cardStyle}>
                <FaLeaf style={{ fontSize: 48, color: '#22c55e', marginBottom: 16 }} />
                <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>500K+ Trees Saved</h3>
                <p style={{ color: '#374151' }}>Through our recycling programs, we've prevented deforestation equivalent to saving over half a million trees.</p>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={cardStyle}>
                <FaRecycle style={{ fontSize: 48, color: '#3b82f6', marginBottom: 16 }} />
                <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>2M Tons Recycled</h3>
                <p style={{ color: '#374151' }}>We've processed and recycled millions of tons of waste, turning trash into valuable resources.</p>
              </div>
            </div>
            <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={cardStyle}>
                <FaUsers style={{ fontSize: 48, color: '#ef4444', marginBottom: 16 }} />
                <h3 style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 8 }}>100+ Communities</h3>
                <p style={{ color: '#374151' }}>Serving diverse urban and rural areas with tailored waste management solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer-like section */}
      <section style={{
        backgroundColor: '#16a34a',
        color: 'white',
        padding: '64px 16px',
        textAlign: 'center',
      }}>
        <div style={containerStyle}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 24 }}>
            Ready to Join Us?
          </h2>
          <p style={{ fontSize: 18, marginBottom: 32 }}>
            Be part of the change. Whether you're a community leader, business, or individual, let's work together for a sustainable future.
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
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;