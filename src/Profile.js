import React from "react";
import picture from "./assets/profile.png";

const Profile = (props) => {
  return (
    <img
      className="self-center opacity-50"
      src={picture}
      alt="Profile of Chander Ramesh"
      style={{
        WebkitMaskImage:
          "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
      }}
    />
  );
};

export default Profile;
