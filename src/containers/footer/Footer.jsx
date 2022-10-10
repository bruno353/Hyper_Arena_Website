import React from 'react';
import gpt3Logo from '../../logo2.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">If you want to invest or join the team, get in touch!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="mailto:movviaugust@gmail.com" rel="noreferrer" target="_blank"><p>Request a call!</p></a>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img className="imageLogo" src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://imported-sombrero-a77.notion.site/Documentation-e1c7fa0972ef48a88ee915b4e08967ce" rel="noreferrer" target="_blank"><p>Documentation</p></a>
        <a href="https://github.com/bruno353" rel="noreferrer" target="_blank"><p>Github</p></a>
        <a href="https://www.linkedin.com/in/bruno-laureano-dos-santos-97a782217/" rel="noreferrer" target="_blank"><p>Linkedin</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <a href="mailto:brunolsantos152@gmail.com" rel="noreferrer" target="_blank"><p>Email 1</p></a>
        <a href="mailto:movviaugust@gmail.com" rel="noreferrer" target="_blank"><p>Email 2</p></a>
      </div>

    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Hyper Arena. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
