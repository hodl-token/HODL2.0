import HeroImage from '../images/hero-img.png'
import HeroBg from '../images/background.jpg'
import React,{Component} from 'react'
import Web3 from 'web3'
import LMabi from '../shared/HODL2abi.json'
import CoinGecko from 'coingecko-api'
import swal from 'sweetalert'
import AnimatedNumber from "animated-number-react";

export class HeroSector extends Component {
 

   constructor(props) {

     super(props);
     this.state = { 
 
        maxTransactionAmount: 0,
        TotalbnbinrewardPool: 0,
        LMbalanceLPpool: 0,
        oneBNBprice:0,
        LPbnb: 0,
        circulatingSupply:0,
        adminbalance:0,
        charitybnb:0
   
     }
    
   }
   
   componentDidMount() { 

    //  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

      const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
   

      this.getCenter();

       // set Interval
        this.interval = setInterval(this.getCenter, 5000);
   }




   getCenter = () => 
   
   {
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
  
    var contractABI = LMabi;
    var contractAddress ="0x5788105375ecF7F675C29e822FD85fCd84d4cd86";
    var contract = new web3.eth.Contract(contractABI,contractAddress);
   
     // get MAX transaction Amount
       contract.methods._maxTxAmount().call().then(amount => {
       //console.log(amount);
       var gwei = web3.utils.toBN(amount).toString();
       var tokens = web3.utils.toWei(gwei,"Gwei");
       this.setState({ maxTransactionAmount: web3.utils.fromWei(tokens, 'ether')})
       }
       )


     // get BNB balance of reward POOl  
       web3.eth.getBalance("0x5788105375ecF7F675C29e822FD85fCd84d4cd86")
       .then(balance => {
           //console.log(balance);
           var tokens = web3.utils.toBN(balance).toString();
           this.setState({ TotalbnbinrewardPool: web3.utils.fromWei(tokens, 'ether')})
             
       });

      // get BNB of reserve wallet
       web3.eth.getBalance("0xE964808e62C5D90D61891916c4e0CdaA340E8fAb")
       .then(balance => {
           ////console.log(balance);
           var tokens = web3.utils.toBN(balance).toString();
           this.setState({ charitybnb: web3.utils.fromWei(tokens, 'ether')})
             
       });


     // get TotalBNB in liquidity Pool 
       var wrappednBNBABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
       var wrappedBNBcontractAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
       
       var wrappedBNBcontract = new web3.eth.Contract(wrappednBNBABI,wrappedBNBcontractAddress);   
       
       wrappedBNBcontract.methods.balanceOf("0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050").call().then(balance => {
           //console.log(balance);
           var tokens = web3.utils.toBN(balance).toString();
           this.setState({ LPbnb: web3.utils.fromWei(tokens, 'ether')})
           }
           )


      
       // get LM token in LP 

       contract.methods.balanceOf("0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050").call().then(balance => {
          //console.log(balance);
          var gwei = web3.utils.toBN(balance).toString();
          var tokens = web3.utils.toWei(gwei,"Gwei");
          this.setState({ LMbalanceLPpool: web3.utils.fromWei(tokens, 'ether')})
          // //console.log("LPbnb",this.state.LPbnb);
          // //console.log("LMtokenPOOL",this.state.LMbalanceLPpool);           
          }
          )    
     

          // LM token of admin
          contract.methods.balanceOf("0x728a0b0b113e915a64ddb2182F62F2661CC617B0").call().then(balance => {
            //console.log(balance);
            var gwei = web3.utils.toBN(balance).toString();
            var tokens = web3.utils.toWei(gwei,"Gwei");
            this.setState({ adminbalance: web3.utils.fromWei(tokens, 'ether')})
            // //console.log("LPbnb",this.state.LPbnb);
            // //console.log("LMtokenPOOL",this.state.LMbalanceLPpool);           
            }
            )    
         

       //  circulating Supply LM token   
       contract.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call().then(balance => {
          //console.log(balance);
          var gwei = web3.utils.toBN(balance).toString();
          var tokens = web3.utils.toWei(gwei,"Gwei");
          var csupply = Number(1000000000000000) - Number((web3.utils.fromWei(tokens, 'ether'))) ;
          this.setState({ circulatingSupply: csupply})
          }
          )


       // fetch latest 1 BNB price
          const CoinGeckoClient = new CoinGecko();
         // fetch price of 1 BNB
         CoinGeckoClient.simple.price({
          ids: ['binancecoin'],
          vs_currencies: ['usd'],
       }).then(data => {
          this.setState({ oneBNBprice: data.data.binancecoin.usd })
       })
   
  
    };

formatValue = value => `$ ${new Intl.NumberFormat().format(value)}`;
formatNormalValue = value => `$ ${value.toFixed(8)}`;
formatBNB = value => `BNB ${new Intl.NumberFormat().format(value)}`;

render() {

  var priceperToken = ((( Number(1000000) * Number(this.state.LPbnb) ) / Number(this.state.LMbalanceLPpool)* this.state.oneBNBprice))/Number(1000000);
  
  


  ////console.log("pricepertoken",typeof(priceperToken));

     //    //console.log("lpbnb",typeof(this.state.LPbnb));
    //    //console.log("lmbalancepool",typeof(this.state.LMbalanceLPpool));

    //  var onemilprice = ( 1000000 * this.state.LPbnb ) / (this.state.LMbalanceLPpool);
    //  //console.log("onemlprice",onemilprice);

 return (
   <section id="hero" className="d-flex align-items-center banner_hero" style={{ backgroundImage: `url(${HeroBg})` }}>

   <div className="container">
     <div className="row">
       <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
         <h1>EARN MORE BY HOLDING </h1> <br></br>
         <h2 className="mb-3 welcome_content">

HODL works on an autonomous frictionless yield farming and liquidity generation protocol. </h2>
<h2 className="mb-3 welcome_content">
Simply hold $HODL tokens in your wallet and you will get more. In addition to this, you will also earn daily rewards in $BNB. 
<p></p>
<p>Accumulating Wealth Was Never This Simple!</p>
</h2>

{/* $HODL conducts three functions during every trade: <br/>

1) Reflection <br/>
2) LP Acquistition <br/>
3) Burn <br/>
<br/>
$HODL brings the best of the best revolutionary mechanism to BSC ecosystem. <br/>
<br/> EARN $BNB by hodling the $HODL Token ! */}



         <div className="d-lg-flex">
           <a href="/dashboard" className="btn-get-started scrollto" target="_blank">Launch App</a>
           <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86" className="btn-get-started scrollto " target="_blank">Buy Now</a>
           {/* <a href="https://hodlgames.net/" className="btn-get-started scrollto" target="_blank">HODL Wheel</a> */}
         </div>
       </div>
       <div className="col-lg-6 order-1 order-lg-2 hero-img  " data-aos="zoom-in" data-aos-delay="200">
         <img src={HeroImage} className="img-fluid animated" alt="" />
       </div>
     </div>

     <div className="row pt-5 pb-3 price_coin">
       <div className="col-lg-12">
       <div className="d-lg-flex abc">
           <a  className="btn-get-started scrollto">Max Transaction Amount
             <br/>$HODL {new Intl.NumberFormat().format(this.state.maxTransactionAmount)}  
             {/* <br/>$HODL 10,000,000,000,000 */}
           </a>


           <a  className="btn-get-started scrollto ">1 Mil HODL Price

<br/>
{/* $ { ((( Number(1000000) * Number(this.state.LPbnb) ) / Number(this.state.LMbalanceLPpool)) * this.state.oneBNBprice).toFixed(10)} */}

<AnimatedNumber
value={ ((( Number(1000000) * Number(this.state.LPbnb) ) / Number(this.state.LMbalanceLPpool)) * this.state.oneBNBprice).toFixed(10)}
formatValue={this.formatNormalValue}
duration={300}
/>  


</a>


<a  className="btn-get-started scrollto ">Total Liquidity Pool

<br/>
{/* $ {new Intl.NumberFormat().format((this.state.oneBNBprice * this.state.LPbnb * 2).toFixed(2)) } */}
         
         <AnimatedNumber
      value={(this.state.oneBNBprice * this.state.LPbnb * 2).toFixed(2)}
      formatValue={this.formatValue}
      duration={300}
    />
         
      
         {/* <br/>$HODL NaN */}
       </a>




           <a  className="btn-get-started scrollto ">Reward Pool
             <br/>
             {/* BNB  {new Intl.NumberFormat().format(this.state.TotalbnbinrewardPool)} */}
            
             <AnimatedNumber
          value={this.state.TotalbnbinrewardPool}
          formatValue={this.formatBNB}
          duration={300}
        />

             {/* <br/>BNB NaN */}
           </a>

     
           <a  className="btn-get-started scrollto ">Reserve Pool 

<br/>
{/* $ { new Intl.NumberFormat().format((this.state.circulatingSupply * priceperToken).toFixed(2))} */}

<AnimatedNumber
 value={this.state.charitybnb}
 formatValue={this.formatBNB}
duration={300}
/>

</a>

<a  className="btn-get-started scrollto ">HODL Marketcap

<br/>
{/* $ { new Intl.NumberFormat().format((this.state.circulatingSupply * priceperToken).toFixed(2))} */}

<AnimatedNumber
value={(this.state.circulatingSupply * priceperToken).toFixed(2)}
formatValue={this.formatValue}
duration={300}
/>

</a>



         </div>
         </div>
     </div>
  
  
  


   </div>

 </section>


 );

}
} 

export default HeroSector;

