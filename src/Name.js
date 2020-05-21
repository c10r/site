import React from "react";

const fontClasses = `font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`

const Name = (props) => {
  return (
    <div
      className={`flex flex-row items-center justify-center ${fontClasses} lg:w-1/3`}
      style={{
        fontFamily: "poppins",
        letterSpacing: "1px",
      }}
    >
      <p className="flex-shrink lg:pr-3" style={{ color: '#c70039' }}>Chander</p>
      <p className="flex-shrink text-gray-100">Ramesh</p>
    </div>
  );
};

export default Name;
