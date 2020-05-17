import React from 'react';

const Name = (props) => {
  return (
    <div className="font-bold flex-grow self-center flex justify-center"
      style={{ fontFamily: 'poppins', fontSize: '4.1rem', letterSpacing: '1px' }}>
      <p className="flex-none text-red-700 pr-3">Chander</p>
      <p className="flex-none text-gray-100">Ramesh</p>
    </div>
  );
}

export default Name;