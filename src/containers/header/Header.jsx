/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';
// import ai from '../../assets/ai.png';
// import LoadingIndicator from '../../components/LoadingIndicator';
// import SelectCharacter from '../../components/SelectCharacter';
// import { CONTRACT_ADDRESS, transformCharacterData } from './constants';
// import myEpicGame from './MyEpicGame.json';
// import Arena from '../../components/Arena';
// import './header.css';

// const Header = () => {
//   const [currentAccount, setCurrentAccount] = useState(null);

//   // new state property
//   const [characterNFT, setCharacterNFT] = useState(null);

//   // state for laoding indicator
//   const [isLoading, setIsLoading] = useState(false);

//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { ethereum } = window; // checking if user is connected to metamask

//       if (!ethereum) {
//         console.log('Make sure you have MetaMask!');

//         setIsLoading(false);
//         return;
//       } {
//         console.log('We have the ethereum object', ethereum);

//         // Check if we're authorized to access the user's wallet
//         const accounts = await ethereum.request({ method: 'eth_accounts' });

//         // User can have multiple authorized accounts, we grab the first one if its there!
//         if (accounts.length !== 0) {
//           const account = accounts[0];
//           console.log('Found an authorized account:', account);
//           setCurrentAccount(account);
//         } else {
//           console.log('No authorized account found');
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }

//     setIsLoading(false);
//   };
//   // implement connectwallet method here
//   const connectWalletAction = async () => {
//     try {
//       const { ethereum } = window;

//       if (!ethereum) {
//         alert('Get MetaMask!');
//         return;
//       }

//       // Fancy method to request access to account.
//       const accounts = await ethereum.request({
//         method: 'eth_requestAccounts',
//       });

//       // Boom! This should print out public address once we authorize Metamask.
//       console.log('Connected', accounts[0]);
//       setCurrentAccount(accounts[0]);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   // Render Methods
//   // eslint-disable-next-line consistent-return
//   const renderContent = () => {
//     // if app is loading, render the loadingindicator

//     if (isLoading) {
//       return <LoadingIndicator />;
//     }

//     // Scenario #1
//     if (!currentAccount) {
//       return (
//         <div className="gpt3__header section__padding" id="home">
//           <div className="gpt3__header-content">
//             <h1 className="gradient__text">Explore the world of Hyper Arena</h1>
//             <p>The first NFT game of Hyperverse, a protocol that will change the Gamefi world! Mint your Hyper Hamster and start now your journey, raid in dungeons (PvE) or join a team for the 4X4 Arena (PvP)!</p>
//             <div className="gpt3__header-content__input">
//               <button type="button" onClick={connectWalletAction}>Play the PvE demo</button>
//             </div>
//             <div className="gpt3__header-content__people">
//               <p> The final game will be playable in desktop and mobile, but since this is a demo, we are offering the game in the browser (game performance is affected)</p>
//             </div>
//           </div>
//           <div className="gpt3__header-image">
//             <img src={ai} />
//           </div>
//         </div>
//       );
//       // Scenario #2
//     } if (currentAccount && !characterNFT) {
//       return <SelectCharacter setCharacterNFT={setCharacterNFT} />;
//     } if (currentAccount && characterNFT) {
//       return <Arena characterNFT={characterNFT} setCharacterNFT={setCharacterNFT} />;
//     }
//   };
//   useEffect(() => {
//     setIsLoading(true);
//     checkIfWalletIsConnected();
//   }, []);

//   useEffect(() => {
//     // The function we will call that interacts with out smart contract
//     const fetchNFTMetadata = async () => {
//       console.log('Checking for Character NFT on address:', currentAccount);

//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const gameContract = new ethers.Contract(
//         CONTRACT_ADDRESS,
//         myEpicGame.abi,
//         signer,
//       );

//       // eslint-disable-next-line no-shadow
//       const characterNFT = await gameContract.checkIfUserHasNFT();
//       if (characterNFT.name) {
//         console.log('User has character NFT');
//         setCharacterNFT(transformCharacterData(characterNFT));
//       }

//       // once its done loading, set loading to false
//       setIsLoading(false);
//     };

//     // We only want to run this, if we have a connected wallet
//     if (currentAccount) {
//       console.log('CurrentAccount:', currentAccount);
//       fetchNFTMetadata();
//     }
//   }, [currentAccount]);

//   return (
//     <div>
//       {renderContent()}
//     </div>
//   );
// };
// export default Header;

import React from 'react';
import './header.css';
import ReactPlayer from 'react-player';
// import ai from '../../assets/ai.png';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Explore the world of Hyper Arena</h1>
      <p>The first NFT game of Hyperverse, a protocol that will change the Gamefi world! Mint your Hyper Hamster and start now your journey, raid in dungeons (PvE) or join a team for the 4X4 Arena (PvP)!</p>
      <div className="gpt3__header-content__input">
        <button type="button"> <a href="https://mega.nz/file/szBnyIKC#UuBf2eNMSCgxdAbSqeUpUpAIq5JY9p2K-iZxOw8juDA" rel="noreferrer" target="_blank">Download and play the PvE demo!</a></button>
      </div>
      <div className="gpt3__header-content__people" />
    </div>
    <div className="gpt3__header-image">
      <ReactPlayer controls url="https://www.youtube.com/watch?v=bCCuQMfryAY" />
    </div>
  </div>
);
export default Header;
