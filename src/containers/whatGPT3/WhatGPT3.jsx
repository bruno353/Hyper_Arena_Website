import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is the Hyperverse?" text="Hyperverse will be a gamefi protocol based on the hyperstructure concept: a blockchain system that can run forever - by the user, for the user - without mediators. As long as the blockchain where it is based works, it will be unstoppable, free and permissioneless. Projects as Uniswap and Zora exemplify a hyperstructure ideal: Using fees to expand the system and building liquidity." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Hyperstructures and the positive-sum ecosystem</h1>
      <p><a href="https://jacob.energy/hyperstructures.html" target="_blank" rel="noopener noreferrer">Read more about the hyperverse - jacob.eth</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="User-Agnostic" text="The ultimatum concept of freedom, any user has the possibility to contribute" />
      <Feature title="Valuable" text="A free protocol that generates value through incentives and transparency" />
      <Feature title="Universal" text="Our goal with hyperstructures is to build a universal and standardized web3, where your NFT has the power to surf between games and protocols" />
    </div>
  </div>
);

export default WhatGPT3;
