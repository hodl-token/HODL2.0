import React,{useEffect,useState} from 'react';
import Web3 from 'web3'
import LMabi from '../shared/LMabi.json'


function Tokenomics(){


  const [LMbalanceLPpool,setLMbalanceLPpool] = useState(0);
   const [LPbnb,setLPbnb] = useState(0);
   const [onebnb,setonebnb] = useState(0);
   const [value,setValue] = useState(0)
   const [hodl,sethodl] = useState(0)
   const [dailyreward,setdailyreward] = useState(0)
   const [TotalbnbinrewardPool,setTotalbnbinrewardPool] = useState(0);
   const [yearly,setyearly] = useState(0);
   const [recover,setrecover] = useState(0);

async function setValues(a) {

  //setValue(a);
  await setValue(a);
  var input = Number(a);
  var hodl = Number(Number(a)*onebnb*0.9).toFixed(0); 
  await sethodl(hodl);
  await setdailyreward(((Number(a)*onebnb*0.9 /Number(709271212874876))* TotalbnbinrewardPool).toFixed(5));
  await setyearly((((Number(a)*onebnb*0.9 /Number(709271212874876))* TotalbnbinrewardPool)*364).toFixed(2));
  var y = ((Number(a)*onebnb*0.9/Number(709271212874876))* TotalbnbinrewardPool)*364;
  await setrecover(Number(Number((input*364)/y).toFixed(0)).toFixed(0));
  
}


function web3apis() {

    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = LMabi;
    var contractAddress ="0x5788105375ecF7F675C29e822FD85fCd84d4cd86";
    var contract = new web3.eth.Contract(contractABI,contractAddress);

    web3.eth.getBalance("0x5788105375ecF7F675C29e822FD85fCd84d4cd86")
    .then(balance => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setTotalbnbinrewardPool(web3.utils.fromWei(tokens, 'ether'))
          
    });

  var wrappednBNBABI = [{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
  var wrappedBNBcontractAddress = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
  
  var wrappedBNBcontract = new web3.eth.Contract(wrappednBNBABI,wrappedBNBcontractAddress);   
  
  wrappedBNBcontract.methods.balanceOf("0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050").call().then(balance => {
      
      var tokens = web3.utils.toBN(balance).toString();
      setLPbnb( web3.utils.fromWei(tokens, 'ether'))
      //console.log("lpbnb",LPbnb);
     }
      )


  contract.methods.balanceOf("0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050").call().then(balance => {
    ////console.log(balance);
    var gwei = web3.utils.toBN(balance).toString();
    var tokens = web3.utils.toWei(gwei,"Gwei");
    setLMbalanceLPpool( web3.utils.fromWei(tokens, 'ether'))

    }
    )    
   
   var pricep = ((( Number(1000000) * Number(LPbnb) ) / Number(LMbalanceLPpool)))/Number(1000000);
   setonebnb(Number(1/pricep));


}


useEffect(()=>{

  web3apis();
   const interval = setInterval(web3apis, 500000);

  // //console.log("User",user);
  //console.log("1bnbtoken",onebnb);
   
})








  return(
 
<div>
<section id="calc" className="faq section-bg modal_hodlInsvetmentcal">




      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="section-title">
         
          
          <h2>HODL Investment & Rewards Calculator</h2>
      
        </div>


  <div className="row">
         
         
         
         <div class="col-md-12">
          <div class="ist_cal"> 

 
          </div>
         </div>




         <div class="col-md-12">
          <div class="ist_tab text-center"> 

          </div>
         </div>
          <div className="rewardcalc">
           <table class="table table-striped table-bordered text-center">
  <thead>
    <tr>
      <th scope="col" >Enter BNB Amount to Invest </th>
      <th scope="col" >$HODL Token<br/>Balance</th>
      <th scope="col">Daily Rewards <br/>  (BNB)* </th>
      <th scope="col">Yearly Rewards <br/>  (BNB)* </th>
      <th scope="col">Days to Recover Initial Investment By Rewards</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"> <input type="text" class="form-control" id="text" placeholder="Enter BNB Amount" onChange={e => setValues(e.target.value)}  /></th>
      <td>{new Intl.NumberFormat().format(hodl)}</td>
      <td>{dailyreward}</td>
      <td>{yearly}</td>
      <td>{recover}</td>
    </tr>
   
  </tbody>
</table>
</div>

   



<div class="button_cacla"> 

<a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86" class="btn-get-started scrollto" target="_blank">Buy $HODL</a>


</div>

          
         </div>
      
         <br></br>
<p className="text-center" >*These are estimates and not a financial advice. Pool and Rewards are always changing based on buys, sells, collects by others and your percentage holdings.</p>       
      
      

 </div>
</section>







<section id="tokenomics" className="about">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>TOKENOMICS</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6">

          <section id="skills" className="skills">
    <div className="container" data-aos="fade-up">

      <div className="row">

        <div className="col-lg-12 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">


          <div className="skills-content">

             <div className="progress">
              <span className="skill">Presale & Launch <i className="val">66.4%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
{/* 
             <div className="progress">
              <span className="skill">Pre Sale <i className="val">25%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div> */}

            <div className="progress">
              <span className="skill">Burn <i className="val">23.6%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="23" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Airdrops <i className="val">5%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Team & Marketing<i className="val">5%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>





          </div>

        </div>
      </div>

    </div>
  </section>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 token_stuff">
          <p>
           <strong>Total Supply: </strong>  1 Quadrillion $HODL
          </p>
          <ul>
             {/* <li><i className="ri-check-double-line"></i> 25% to be allocated for Pre-Sale.</li> */}
            <li><i className="ri-check-double-line"></i> 66.4% for Presale & launch. 100% liquidity locked for 6 months</li>
            {/* <li><i className="ri-check-double-line"></i> 5% for airdrop (Locked till distribution)</li> */}
            {/* <li><i className="ri-check-double-line"></i> Team only gets 1% which is locked, and 4% for marketing.</li> */}
            <li><i className="ri-check-double-line"></i> We burnt 23.6%.</li>
          </ul>

        </div>
      </div>
      {/* <div className="token_button">
        <a href="#" className="btn-learn-more view_more">View More</a>
      </div> */}

    </div>

  </section>

  </div>

  )
}
export default Tokenomics;