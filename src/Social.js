import React from "react";

import { ReactComponent as Quill } from "./assets/education.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as CodingPortfolio } from "./assets/coding.svg";

const animation = `transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:opacity-100`;
const image = `h-8 w-8 opacity-50 ml-8`;
const style = { cursor: "pointer", zIndex: "2", fill: "white" }

const Social = (props) => {
  return (
    <div className="w-1/3 flex-none flex flex-col h-screen justify-center">
      <Twitter
        className={`${image} ${animation} mb-4`}
        style={style}
        onClick={() => (window.location.href = "https://twitter.com/chander")}
      />
      <LinkedIn
        className={`${image} ${animation} mb-4`}
        style={style}
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/chandrasekarramesh/")
        }
      />
      <Quill
        className={`${image} ${animation} mb-4`}
        style={style}
        onClick={() => (window.location.href = "https://blog.chander.app")}
      />
      <CodingPortfolio
        className={`${image} ${animation}`}
        style={style}
      />
    </div>
  );
};

export default Social;
