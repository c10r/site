import React from "react";
import picture from "./assets/profile.png";

const imageGradient = {
  WebkitMaskImage:
    "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
};

const Profile = (props) => {
  return (
    <div className="flex lg:w-1/3 justify-center lg:items-center lg:justify-end">
      <img
        className="object-contain opacity-75"
        src={picture}
        alt="Profile of Chander Ramesh"
        style={imageGradient}
      />
    </div>
  );
};

export default Profile;
