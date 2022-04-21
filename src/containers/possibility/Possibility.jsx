import React from 'react';
import possibilityImage from '../../assets/dragon.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Fun to Play</h4>
      <h1 className="gradient__text">We believe the next<br />generation of NFT games will be focused in the gameplay</h1>
      <p>Most of current crypto games are tedious and just serve as a way to easily enrich those who entered first. We are creating a game with a healthy ecosystem, where users will play for fun, and making money is just a consequence.</p>
    </div>
  </div>
);

export default Possibility;
