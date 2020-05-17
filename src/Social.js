import React from "react";

import { ReactComponent as Quill } from './assets/education.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import { ReactComponent as CodingPortfolio } from './assets/coding.svg';

const animation =
  `transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:opacity-100`
const image = `h-8 w-8 opacity-50`

const Social = (props) => {
  return (
    <div className="flex-none flex flex-col h-screen justify-center ml-16">
      <Twitter className={`h-10 w-10 opacity-50 ${animation} mb-4`}
        style={{ cursor: 'pointer' }}
        onClick={() => window.location.href="https://twitter.com/chander" } />
      <LinkedIn className={`${image} ${animation} mb-4`}
        style={{ fill: 'white', cursor: 'pointer' }}
        onClick={() => window.location.href="https://www.linkedin.com/in/chandrasekarramesh/" } />
      <Quill className={`${image} ${animation} mb-4`}
        style={{ fill: 'white', cursor: 'pointer' }}
        onClick={() => window.location.href="https://blog.chander.app" } />
      <CodingPortfolio className={`${image} ${animation}`}
        style={{ fill: 'white', cursor: 'pointer' }} />
    </div>
  );
};

export default Social;
