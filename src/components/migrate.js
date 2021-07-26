import logo from '../images/logo.png';
import React, { Component } from 'react';
import Web3 from 'web3';
import LMabi from '../shared/LMabi.json';
import Migrateabi from '../shared/Migrate.json';

import contractService from '../shared/LMcontractservice';


import HeroImage from '../images/hero-img.png';
import Hodl2Image from '../images/hodl2dashboardlogo.jpeg'
 
import Metamask from '../images/MetaMask.png';
import TrustWallet from '../images/trust.png';
import Safepal from '../images/safepal.jpg';
import TP from '../images/tokenpocket.png';
import BSC from '../images/bscw.png';
import BCW from '../images/BinanceChainWallet.jpeg';
import MW from '../images/MathWallet.jpeg';
import WC from '../images/wc.png';

import WalletConnectProvider from '@walletconnect/web3-provider';

import swalreact from '@sweetalert/with-react';
import swal from 'sweetalert';

export class Migrate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wallet: '',
      address: '',
      hodl1balance: 0,
      hodl2balance: 0,
      swapped:false,
    };
  }

  componentDidMount() {
    //  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

    let address = window.sessionStorage.getItem('walletAddress');
    //   const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = LMabi;
    var contractAddress = '0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    var contractAddress2 = '0x5788105375ecF7F675C29e822FD85fCd84d4cd86';
    var contract2 = new web3.eth.Contract(contractABI, contractAddress2);
  
    var migratoraddress = '0xE3dF3f8076288a3260c8DaEDadBb1B64F086FA98';
    var migrateabi = Migrateabi; 
    var migratecontract = new web3.eth.Contract(migrateabi, migratoraddress);

    if (address) {
      // HODL1 BALANCE user
      contract.methods
        .balanceOf(address)
        .call()
        .then((balance) => {
          ////console.log(balance);
          var gwei = web3.utils.toBN(balance).toString();
          var tokens = web3.utils.toWei(gwei, 'Gwei');
          this.setState({ hodl1balance: Number(web3.utils.fromWei(tokens, 'ether')) });
        });
    
      // HODL2 BALANCE user
      contract2.methods
        .balanceOf(address)
        .call()
        .then((balance) => {
          ////console.log(balance);
          var gwei = web3.utils.toBN(balance).toString();
          var tokens = web3.utils.toWei(gwei, 'Gwei');
          this.setState({ hodl2balance: Number(web3.utils.fromWei(tokens, 'ether')) });
        });

       // swapped or not
       migratecontract.methods.blacklist(address).call().then((value) => {

         this.setState({swapped:value});

      })

    }
  }


 swap = async () => {
 
  console.log("Swap Hodl called");
  const web3 = await contractService.getWeb3Client();
  
  if (web3) 
  {
     

  if (this.state.hodl1balance !=0 ) {

   try {

    const tx = await contractService.approve(
              web3,
              );
   
    const txResult = await contractService.swaptoken(
          web3
          );

  
          await swalreact(
            <div>
                <h5 className='text-primary mb-4'>
                  You Have Successfully Migrated
                </h5>
                <div>
                  <h6 className='mb-0'>{this.state.hodl1balance} HODL 1.0</h6>
                  <h6 className='my-4'>To</h6>
                  <h6>{this.state.hodl1balance} HODL 2.0</h6>
                  <div>
                    <img
                      height='60px'
                      className='d-block mx-auto'
                      src={Hodl2Image}
                      alt='...'
                    ></img>
                  </div>
                </div>
              </div>
        )
  
   window.location.reload();

  }

  catch
  {   
      swal("Transaction Failed!");
      window.location.reload();
  }


  }
  
  else {

    swal("No Tokens to Migrate!")

  }


   }
   
   else {
    swal({
      title: 'Change Network to Binance Mainet',
      timer: 3000
      })
       }




 }








  logoutUser = async () => {
    if (window.sessionStorage.getItem('walletName') == 'walletconnect') {
      const provider = new WalletConnectProvider({
        rpc: {
          56: 'https://bsc-dataseed.binance.org/',
          //  1 : "https://bsc-dataseed.binance.org/",
          // 56: "https://bsc-dataseed.binance.org/",
          97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        },
        chainId: 56,
        //   bridge: 'https://pancakeswap.bridge.walletconnect.org/',
        //  qrcode: true,
      });

      await provider.disconnect();
    }

    localStorage.removeItem('provider');
    window.sessionStorage.removeItem('walletAddress');
    window.sessionStorage.removeItem('walletName');
    window.location.reload();
  };


  requestAuth = async () => {
    try {
      console.log('Metamask auth requested');

      localStorage.setItem('loginType', 'metamask');

      const web3 = await contractService.getWeb3Client();
      // const accounts = await web3.eth.getAccounts();
      await this.userLogin(web3);
    } catch (e) {
      console.error(e);
    }
  };

  walletconnect = async () => {
    try {
      console.log('walletconnect auth requested');

      localStorage.setItem('loginType', 'walletconnect');

      const web3 = await contractService.getWeb3Client();

      await this.userLogin(web3);
    } catch (e) {
      console.error(e);
    }
  };

  requestAuthBSC = async () => {
    try {
      console.log('Metamask auth requested');

      localStorage.setItem('loginType', 'binance');

      const web3 = await contractService.getWeb3Client();
      // const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0]);
      await this.userLogin(web3);
      // await this.userLogin(web3);
      // window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  userLogin = async (web3) => {
    const accounts = await web3.eth.getAccounts();
    const providerName = localStorage.getItem('loginType');
    let loginType = localStorage.getItem('loginType');

    const networkId = await web3.eth.net.getId();

    console.log('User login params => ', accounts, networkId);
    window.sessionStorage.setItem('walletAddress', accounts[0]);
    window.sessionStorage.setItem('walletName', providerName);

    window.location.reload();
  };

  render() {
    var connected = false;
    this.wallet = window.sessionStorage.getItem('walletName');
    this.address = window.sessionStorage.getItem('walletAddress');

    if (this.address) {
      connected = true;
    }

    return (
      <div className='container mb-5'>
        <section className='pb-0 rounded-lg' id='cta'>
          <div className='container' data-aos='zoom-in'>
            <div className='row'>
              <div className='col-lg-9 text-center text-lg-left'>
                <h3 className='ml-md-4'>Migrate to HODL 2.0</h3>
              </div>
              <div className='col-lg-3 cta-btn-container text-center'>
                {!connected && (
                  <a
                    className='cta-btn align-middle-vertical'
                    href='#'
                    data-toggle='modal'
                    data-target='#exampleModalCenter'
                  >
                    Connect wallet
                  </a>
                )}
                {connected && (
                  <>
          { !this.state.swapped    &&    <div>
                      {' '}
                      <a onClick={this.swap}
                        className='cta-btn align-middle-vertical'
                        href='#'
                        data-toggle='modal'
                        data-target='#swapModal'
                      >
                       Swap Now
                      </a>
                    </div>     }

          { this.state.swapped    &&    <div>
        
           <a href="https://twitter.com/TokenHodl" className='cta-btn align-middle-vertical' target="_blank">Connect with us</a>
             </div>     }

                  </>
                )}
              </div>
            </div>
            <div className='col-md-10 mx-auto mt-5 mb-2'>
              {!connected && ''}
              {connected && (
                <div className='row justify-content-between'>
                  <h6 style={{ color: 'white' }}>Wallet Addrress: {window.sessionStorage.getItem('walletAddress').slice(0,10)}.....</h6>

                  <h6 style={{ color: 'white' }}>HODL 1.0 Balance: {(this.state.hodl1balance).toFixed(0)}</h6>

                  <h6 style={{ color: 'white' }}>
                    HODL 2.0 Balance: {(this.state.hodl2balance).toFixed(0)}
                  </h6>
                </div>
              )}
            </div>
          </div>

          <div
            className='modal fade'
            id='exampleModalCenter'
            tabindex='-1'
            role='dialog'
            aria-labelledby='exampleModalCenterTitle'
            aria-hidden='true'
          >
            <div
              className='modal-dialog modal-dialog-centered modal-connect'
              role='document'
            >
              <div className='modal-content modal-content-custom'>
                <div className='modal-body connect-body text-center'>
                  <div class='connect-header'>
                    <div class='connect-flex connect-header-title'>
                      <h5
                        color='text'
                        class='sc-gtsrHT sc-bCwfaz itNBpW kcUtoS'
                      >
                        Connect to a wallet
                      </h5>
                    </div>
                    <button
                      data-dismiss='modal'
                      class='sc-hKFxyN  sc-eCApnc connect-label-btn fAYopv'
                      aria-label='Close the dialog'
                      scale='md'
                    >
                      <svg
                        viewBox='0 0 24 24'
                        color='primary'
                        width='20px'
                        xmlns='http://www.w3.org/2000/svg'
                        class='sc-bdnxRM connect-close-btn'
                      >
                        <path d='M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z'></path>
                      </svg>
                    </button>
                  </div>

                  <div className='connect-pad-list connect-pad-list-top connect-flex connect-list-direction'>
                    <a onClick={this.requestAuth} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          Metamask
                        </div>
                        <img class='connect_wallet_img' src={Metamask} />
                      </button>
                    </a>
                  </div>

                  <div className='connect-pad-list connect-flex connect-list-direction'>
                    <a onClick={this.requestAuth} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          Trust Wallet
                        </div>
                        <img class='connect_wallet_img' src={TrustWallet} />
                      </button>
                    </a>
                  </div>

                  <div className='connect-pad-list connect-flex connect-list-direction'>
                    <a onClick={this.requestAuth} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          SafePal Wallet
                        </div>
                        <img class='connect_wallet_img' src={Safepal} />
                      </button>
                    </a>
                  </div>
                  <div className='connect-pad-list  connect-flex connect-list-direction'>
                    <a onClick={this.requestAuth} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          TokenPocket Wallet
                        </div>
                        <img class='connect_wallet_img' src={TP} />
                      </button>
                    </a>
                  </div>
                  <div className='connect-pad-list  connect-flex connect-list-direction'>
                    <a onClick={this.requestAuth} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          Math Wallet
                        </div>
                        <img class='connect_wallet_img' src={MW} />
                      </button>
                    </a>
                  </div>
                  <div className='connect-pad-list  connect-flex connect-list-direction'>
                    <a onClick={this.requestAuthBSC} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          Binance Chain Wallet
                        </div>
                        <img class='connect_wallet_img' src={BCW} />
                      </button>
                    </a>
                  </div>
                  <div className='connect-pad-list connect-pad-list-bottom connect-flex connect-list-direction'>
                    <a onClick={this.walletconnect} class='link-effect'>
                      <button
                        class='connect-list-btn connect-wallet-label'
                        width='100%'
                        id='wallet-connect-metamask'
                        scale='md'
                      >
                        <div color='primary' class='sc-gtsrHT bGLBCp'>
                          Wallet Connect
                        </div>
                        <img class='connect_wallet_img' src={WC} />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
       
         
        </section>
      </div>
    );
  }
}
export default Migrate;
