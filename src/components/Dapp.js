import logo from '../images/logo.png'
import React,{Component} from 'react'
import Web3 from 'web3'
import LMabi from '../shared/HODL2abi.json'
import contractService from '../shared/LMcontractservice'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import DappHeader from './DappHeader'
import HeroImage from '../images/hero-img.png'
import Hodl2Image from '../images/hodl2dashboardlogo.jpeg'
import Dashboard from './Dashboard'
import swal from 'sweetalert'

export class Dapp extends Component {

  constructor(props) {
    super(props);

    this.state = {
       
        showcomponent1:true,
        showcomponent2: false,
        TotalbnbinrewardPool: 0,
        bnbreward:0,
        fibpool:0
       
    };
  }
  

  componentDidMount() { 

    //  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

      let address = window.sessionStorage.getItem("walletAddress");
    //   const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
      
      const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
  
        var contractABI = LMabi;
        var contractAddress ="0x5788105375ecF7F675C29e822FD85fCd84d4cd86";
        var contract = new web3.eth.Contract(contractABI,contractAddress);
   
     if (address){
         
          // get BNB balance of reward POOl  
       web3.eth.getBalance("0x5788105375ecF7F675C29e822FD85fCd84d4cd86")
       .then(balance => {
           //console.log(balance);
           var tokens = web3.utils.toBN(balance).toString();
           this.setState({ TotalbnbinrewardPool: web3.utils.fromWei(tokens, 'ether')})
             
       });

       contract.methods.calculateBNBReward(address).call().then(balance => {
        //console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();

        this.setState({ bnbreward: web3.utils.fromWei(tokens, 'ether')})
       
        }
        )


        contract.methods
        .rewardHardcap()
        .call()
        .then((balance) => {
          ////console.log(balance);
          var tokens = web3.utils.toBN(balance).toString();
          this.setState({ fibpool : web3.utils.fromWei(tokens, 'ether')})
        });   

    
    }

   }






  buy = async () => {
    
    swal("Presale goes Live on 10th May, 2021")
    };

    
  render() {

   let comp1 = this.state.showcomponent1;
   let comp2 = this.state.showcomponent2;

    let address = window.sessionStorage.getItem("walletAddress");
    

     if (address){
         
        comp1 = false;
        comp2 = true;
        var rewardshare = ( (Number(this.state.bnbreward) / Number(this.state.fibpool) ) * 100).toFixed(3); 
    }
    else {
        comp1 = true;
        comp2 = false;
    }

    
    
 
     



    return (
    <div>
     <DappHeader/>
    
    
     <section id="services" className="services section-bg section_feature mb-0 pb-0 ">
     <br></br>
     <br></br>
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100"
                        style={{justifyContent: 'center'}}>
                        <div className="icon-box text-center">
                            <div className="icon">
                                <img src={Hodl2Image} />
                            </div>
                            <h4>HODL 2.0</h4>
{/* { comp2 && <div>            <h5> Your Reward     Share</h5>
                             <h5> {rewardshare} %</h5>     
                             <h6>Buy More To Increase Your BNB Reward Share!</h6>

</div>
} */}


                            <h5></h5>
                            <h6>Accumulating Wealth Was Never This Simple!</h6>
                            <br/>
                            <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86" className="btn-get-started scrollto dashboard" target="_blank">Buy $HODL 2.0</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
 
    { comp1 &&
        <section id="services" className="services section-bg section_feature mb-0 pb-0 ">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100"
                        style={{justifyContent: 'center'}}>
                        <div className="icon-box text-center">
                            <h2>You are not connected or not using Binance Smart Chain network</h2>
                            <h3>To use the app, make sure: </h3>
                            <h3>You are using the Binance Smart Chain network You need to connect wallet to continue</h3>
                           <br></br>
                           <br></br>
                            <h3>Please switch to BSC Network if you use:</h3>
                            <h4>Metamask</h4>
                            <h4>TrustWallet</h4>
                            <br></br>
                            {/* <p>Hint: The app works best if you use Metamask/TrustWallet. If you do not have BNB wallet, please download Trust Wallet or Metamask
                                 If you have any questions, please ask us here</p> */}
                            <br/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>   }

        { comp2 && <Dashboard/> }

  </div>
  )
  }
}

export default Dapp;