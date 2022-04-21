import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Explore the world of Hyper Arena</h1>
      <p>The first NFT game of Hyperverse, a protocol that will change the Gamefi world! Mint your Hyper Hamster and start now your journey, raid in dungeons (PvE) or join a team for the 4X4 Arena (PvP)!</p>

      <div className="gpt3__header-content__input">
        <button type="button">Play the PvE demo</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
