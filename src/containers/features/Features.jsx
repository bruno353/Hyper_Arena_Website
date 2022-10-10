import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'NFT Standard',
    text: 'Utilizing the CC0 standard will be a key point in the gamefi interoperability for Hyper Arena and subsequent games, where you could use your  same weapons and characters in different games, transacting nfts between games and developing one of the first tokenomics that would live up to the name "metaverse". ',
  },
  {
    title: 'Hyper Hamster',
    text: 'Each Hamster has in its arsenal: a cute pet, a tacky hat, a weapon, a magic pearl and a fancy glass. Generating a combination of over 700 different types of hamster',
  },
  {
    title: 'PvP',
    text: '2x2, 3x3 or 4x4 -> An exciting battle to the limits of your skill. Hyper Arena will reward skilled players - master the habilities of your hamster and earn! Forget the current crypto games that only favor whales. We want to create a really fun play-and-earn game.',
  },
  {
    title: 'PvE',
    text: 'Explore dangerous dungeons with your friends or alone, a style for whom wants to farm and level up your skills before diving into the PvP',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text"> Hyper Arena is the first play-and-earn game based in the Hyperverse standards, a top-down 2d rpg game: Explore dungeons in the PvE or jump into the PvP Arena, in which the last team standing alive wins  </h1>
      <p>You control a Hyper Hamster in pursuit of the eternal glory</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
