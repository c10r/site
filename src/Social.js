import React from "react";

import { ReactComponent as Blog } from "./assets/blog.svg";
import { ReactComponent as Quill } from "./assets/education.svg";
import { ReactComponent as Twitter } from "./assets/twitter.svg";
import { ReactComponent as LinkedIn } from "./assets/linkedin.svg";
import { ReactComponent as CodingPortfolio } from "./assets/coding.svg";

const animation = `transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:opacity-100`;
const image = `h-8 w-8 md:h-10 md:w-10 m:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 opacity-50 lg:ml-4 xl:ml-8`;
const containerSize = `w-100 h-10 md:h-12 lg:w-1/3 lg:h-screen`
const containerFlexOptions = `flex flex-row mb-2 items-center justify-around md:mb-4 lg:flex-col lg:justify-center lg:items-start lg:mb-0`
const style = { cursor: "pointer", zIndex: "2", fill: "white" };

const Social = (props) => {
  return (
    <div className={`${containerFlexOptions} ${containerSize}`}>
      <Twitter
        id="twitter"
        className={`${image} ${animation} lg:mb-4`}
        style={style}
        onClick={() => (window.location.href = "https://twitter.com/chander")}
      />
      <LinkedIn
        id="linked-in"
        className={`${image} ${animation} lg:mb-4`}
        style={style}
        onClick={() =>
          (window.location.href =
            "https://www.linkedin.com/in/chandrasekarramesh/")
        }
      />
      <Blog
        id="medium"
        className={`${image} ${animation} lg:mb-4`}
        style={style}
        onClick={() => (window.location.href = "https://medium.com/@c5r")}
      />
      <Quill
        id="blog"
        className={`${image} ${animation} lg:mb-4`}
        style={style}
        onClick={() => (window.location.href = "https://blog.chander.app")}
      />
      <CodingPortfolio
        id="portfolio"
        onClick={() =>
          (window.location.href = "https://blog.chander.app/about")
        }
        className={`${image} ${animation}`}
        style={style}
      />
    </div>
  );
};

export default Social;
