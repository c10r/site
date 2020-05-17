import React from "react";

import { ReactComponent as Quill } from './assets/education.svg';
import { ReactComponent as Twitter } from './assets/twitter.svg';
import { ReactComponent as LinkedIn } from './assets/linkedin.svg';
import { ReactComponent as CodingPortfolio } from './assets/coding.svg';

const Social = (props) => {
  return (
    <div className="flex flex-col h-screen justify-center ml-16">
      <Twitter className="h-10 w-10 mb-4"
        style={{ cursor: 'pointer', opacity: '0.6' }}
        onClick={() => window.location.href="https://twitter.com/chander" } />
      <LinkedIn className="h-8 w-8 mb-4"
        style={{ fill: 'white', cursor: 'pointer', opacity: '0.6' }}
        onClick={() => window.location.href="https://www.linkedin.com/in/chandrasekarramesh/" } />
      <Quill className="h-8 w-8 mb-4"
        style={{ fill: 'white', cursor: 'pointer', opacity: '0.6' }}
        onClick={() => window.location.href="https://blog.chander.app" } />
      <CodingPortfolio className="h-8 w-8"
        style={{ fill: 'white', cursor: 'pointer', opacity: '0.6' }} />
    </div>
  );
};

export default Social;
