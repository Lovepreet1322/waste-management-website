import React from 'react';
import { FaRecycle, FaLeaf } from 'react-icons/fa';

const Logo = ({ size = 80, color = '#4CAF50' }) => {
  const style = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: 'bold',
    fontFamily: "'Poppins', sans-serif",
    color,
    userSelect: 'none',
    cursor: 'default',
  };

  return (
    <div style={style}>
      {/* Recycling icon */}
      <FaRecycle size={size} color={color} />

      {/* Text with leaf icon */}
      <div style={{ display: 'flex', alignItems: 'center', fontSize: size / 3 }}>
        <span>Recycle</span>
        <FaLeaf style={{ marginLeft: 6, color: '#2E7D32' }} />
      </div>
    </div>
  );
};

export default Logo;