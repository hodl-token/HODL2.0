import React, { useEffect, useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
// import { Slider, RangeSlider } from 'rsuite';

import $ from 'jquery';
import logo from '../images/logo.png';

import HeroImage from '../images/hero-img.png';
import Hodl2Image from '../images/hodl2dashboardlogo.jpeg'
import BNBImage from '../images/bnbimage.jpeg'

import Icon3 from '../images/icons/3.png';
import Icon8 from '../images/icons/8.png';
import Icon1 from '../images/icons/1.png';
import Icon5 from '../images/icons/12.png';
import Icon2 from '../images/icons/2.png';
import Icon11 from '../images/icons/11.png';
import Icon4 from '../images/icons/4.png';
import CoinGecko from 'coingecko-api';

import Iconp1 from '../images/icons/collectable-reward.svg';  
import Iconp2 from '../images/icons/next_collection_date.svg';  
import Iconp3 from '../images/icons/BNB_Collected_Till_Date.svg';  
import Iconp4 from '../images/icons/HODL_Re_Invested_Till_Date.svg';  
import Iconp5 from '../images/icons/HODL_Balance.svg';  


import Web3 from 'web3';
import LMabi from '../shared/HODL2abi.json';
import contractService from '../shared/LMcontractservice';

import { Confirm } from 'react-st-modal';
import swal from 'sweetalert';
import IconWarning from '../images/icons/warning.png';
import Functions from '../functions';
import AnimatedNumber from 'animated-number-react';
import swalreact from '@sweetalert/with-react';
import Migrate from './migrate';
 
function Dashboard() {
  const [valueSlider, setValueSlider] = useState(50);
  const [maxTransactionAmount, setmaxTransactionAmount] = useState(0);
  const [TotalbnbinrewardPool, setTotalbnbinrewardPool] = useState(0);
  const [LMbalanceLPpool, setLMbalanceLPpool] = useState(0);
  const [oneBNBprice, setoneBNBprice] = useState(0);
  const [LPbnb, setLPbnb] = useState(0);
  const [circulatingSupply, setcirculatingSupply] = useState(0);
  const [LMBalanceuser, setLMBalanceuser] = useState(0);
  const [bnbreward, setbnbreward] = useState(0);
  const [nextAvailableclaim, setnextAvailableclaim] = useState(0);
  const [user, setUser] = useState(false);
  const [address, setaddress] = useState('');
  const [value, setValue] = useState(0);
  const [previousbnbreward, setpreviousbnbreward] = useState(0);
  const [onebnb, setonebnb] = useState(0);
  const [inputvalue, setinputValue] = useState(0);
  const [hodl, sethodl] = useState(0);
  const [dailyreward, setdailyreward] = useState(0);
  const [yearly, setyearly] = useState(0);
  const [recover, setrecover] = useState(0);
  const [charityBnb, setcharityBnb] = useState(0);
  const [totaldistributedBnb, settotaldistributedBnb] = useState(0);
  const [userclaimBnb, setuserclaimBnb] = useState(0);
  const [totalreinvested, settotalreinvested] = useState(0);
  const [totalreflection, settotalreflection] = useState(0);
  const [userreinvested, setuserreinvested] = useState(0);
  const [rewardhardCap, setrewardhardCap] = useState(0);
  const [totalgasdistributed, settotalgasdistributed] = useState(0);
 

  
  function web3apis() {

    let address = window.sessionStorage.getItem('walletAddress');

    // const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');

    var contractABI = LMabi;
    var contractAddress = '0x5788105375ecF7F675C29e822FD85fCd84d4cd86';
    var contract = new web3.eth.Contract(contractABI, contractAddress);

    contract.methods
      ._maxTxAmount()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setmaxTransactionAmount(web3.utils.fromWei(tokens, 'ether'));
      });

    // get BNB balance of reward POOl
    web3.eth
      .getBalance('0x5788105375ecF7F675C29e822FD85fCd84d4cd86')
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setTotalbnbinrewardPool(web3.utils.fromWei(tokens, 'ether'));
      });

    // get BNB balance of charity Pool
    web3.eth
      .getBalance('0xb6266d43F3E319e884E31075a36fDE8ceAeEf1C8')
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setcharityBnb(web3.utils.fromWei(tokens, 'ether'));
      });

    // get TotalBNB in liquidity Pool
    var wrappednBNBABI = [
      {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ];
    var wrappedBNBcontractAddress =
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

    var wrappedBNBcontract = new web3.eth.Contract(
      wrappednBNBABI,
      wrappedBNBcontractAddress
    );


    wrappedBNBcontract.methods
      .balanceOf('0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050')
      .call()
      .then((balance) => {
        var tokens = web3.utils.toBN(balance).toString();
        setLPbnb(web3.utils.fromWei(tokens, 'ether'));
        //console.log("lpbnb",LPbnb);
      });

    // get LM token in LP

    contract.methods
      .balanceOf('0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050')
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setLMbalanceLPpool(web3.utils.fromWei(tokens, 'ether'));
      });


    //  circulating Supply LM token
    contract.methods
      .balanceOf('0x000000000000000000000000000000000000dEaD')
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        var csupply =
          Number(1000000000000000) -
          Number(web3.utils.fromWei(tokens, 'ether'));
        setcirculatingSupply(csupply);
      });


    // fetch latest 1 BNB price
    const CoinGeckoClient = new CoinGecko();
    // fetch price of 1 BNB
    CoinGeckoClient.simple
      .price({
        ids: ['binancecoin'],
        vs_currencies: ['usd'],
      })
      .then((data) => {
        setoneBNBprice(data.data.binancecoin.usd);
      });


    // LM BALANCE user
    contract.methods
      .balanceOf(address)
      .call()
      .then((balance) => {
        ////console.log(balance);
        var gwei = web3.utils.toBN(balance).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setLMBalanceuser(web3.utils.fromWei(tokens, 'ether'));
      });

    contract.methods
      .calculateBNBReward(address)
      .call()
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setbnbreward(web3.utils.fromWei(tokens, 'ether'));
      });

    // next Available Claim Date API

    contract.methods
      .nextAvailableClaimDate(address)
      .call()
      .then((time) => {
        ////console.log(time);
        setnextAvailableclaim(time);
        if (time == 0) {
          setUser(true);
        }
      });


    // total claimed BNb
    contract.methods
      .totalClaimedBNB()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        settotaldistributedBnb(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // user claimed BNb
    contract.methods
      .userClaimedBNB(address)
      .call()
      .then((amount) => {
        ////console.log(amount);
        var tokens = web3.utils.toBN(amount).toString();
        setuserclaimBnb(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // total reinvested bnb
    contract.methods
      .totalreinvested()
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        settotalreinvested(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // total reflection
    contract.methods
    .totalFees()
    .call()
    .then((amount) => {
      ////console.log(amount);
      var gwei = web3.utils.toBN(amount).toString();
      var tokens = web3.utils.toWei(gwei, 'Gwei');
      settotalreflection(Number(web3.utils.fromWei(tokens, 'ether')));
    });



    // user reinvested
    contract.methods
      .userreinvested(address)
      .call()
      .then((amount) => {
        ////console.log(amount);
        var gwei = web3.utils.toBN(amount).toString();
        var tokens = web3.utils.toWei(gwei, 'Gwei');
        setuserreinvested(Number(web3.utils.fromWei(tokens, 'ether')));
      });

    // get reward Hard CAP limit
    contract.methods
      .rewardHardcap()
      .call()
      .then((balance) => {
        ////console.log(balance);
        var tokens = web3.utils.toBN(balance).toString();
        setrewardhardCap(Number(web3.utils.fromWei(tokens, 'ether')));
      });

      

     // get gas fees distributed
     contract.methods
     .totalgasfeesdistributed()
     .call()
     .then((balance) => {
       ////console.log(balance);
       var tokens = web3.utils.toBN(balance).toString();
       settotalgasdistributed(Number(web3.utils.fromWei(tokens, 'ether')));
     });  
  
      
    
  }


  async function submitform() {
    ////console.log(address);
    ////console.log(value);

    const web3 = await contractService.getWeb3Client();

    if (value == '' || value == 0) {
      const isConfirm = Confirm('Please enter Value');
    } else if (address == '') {
      const isConfirm = Confirm('Please Enter recepient address');
    } else {
      if (web3) {
        try {
          const txResult = await contractService.disruptiveTransfertokens(
            web3,
            address,
            value
          );

          const txHash = txResult;
          ////console.log("Tx Placed => ", txHash);

          //Save transaction 2
          const txDetails = {
            value: value,
            txHash: txHash,
            transactionType: 'Disruptive Transfer',
          };

          //alert("transaction done");
          swal('Transaction done!', 'You clicked the button!', 'success');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } catch {
          swal('Transaction Failed!');
        }
      } else {
        swal({
          title: 'Change Network to Binance Mainet',
          timer: 3000,
        });
      }
    }
  }

  async function claim() {
  
   console.log("claim called")

    var bnb = Number(bnbreward);
   


    // var bnb = a.toFixed(4);
    const web3 = await contractService.getWeb3Client();

    console.log("claim calleds")

       
    if (web3) {
      try {
        
        const txResult = await contractService.claimrewards(web3,valueSlider);

        const txHash = txResult;
        ////console.log("Tx Placed => ", txHash);

        //Save transaction 2
        const txDetails = {
          value: value,
          txHash: txHash,
          transactionType: 'Claim Rewards',
        };

        await swalreact(
          <div>
            <h3>Awesomeness !!</h3>
            <br></br>
            <h5>You have Successfully Claimed</h5>
    
            
            <h5> BNB {bnb}</h5>
               
             <h6>As requested,<span style={{ color: 'DarkGoldenRod' }}> {valueSlider}% </span> has been rewarded as BNB. </h6> 
             <h6> <span style={{ color: 'DarkCyan' }}>{100 - Number(valueSlider)}% </span> has been re-invested as tokens deposited in your wallet. </h6>
            
            <br></br>
    
            <p>Support Us By Sharing Now !!</p>
            <br></br>
            <br></br>
            <img src={Hodl2Image} alt='' className='img-fluid photomessage' />
          </div>
        );
    
        setTimeout(() => {
          window.location.reload();
        }, 10);

      } 
      catch {
        swal('Transaction Failed!');
        
      }
    } else {
      swal({
        title: 'Change Network to Binance Mainet',
        timer: 3000,
      });
    }
  }

 
  async function buylink() {
    var link =
      'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86';

    swal ({ title:"Buy tokens to earn rewards",
    content: link ,

           })

    swalreact(
      <div>
        <p>Your Current HODL 2.0 balance is 0</p>
        <h4>You need HODL 2.0 Tokens to Earn BNB</h4>
        <br></br>
        {/* <br></br> */}
        <p>
          <a href={link} className='COLLECTION_MONEY bubbly-button'>
            Buy Now!
          </a>
        </p>
      </div>
    );
    

  }


  useEffect(() => {
    web3apis();
    const interval = setInterval(web3apis, 10000);

    Functions();
    $('#auto_modal').modal('show');

    return () => clearInterval(interval);
  }, []);


  async function setValues(a) {
    var pricep =
      (Number(1000000) * Number(LPbnb)) /
      Number(LMbalanceLPpool) /
      Number(1000000);
    setonebnb(Number(1 / pricep));

    //setValue(a);
    //    console.log("1",a);

    await setinputValue(a);
    var input = Number(a);
    var hodl = Number(Number(a) * Number(onebnb) * 0.9).toFixed(0);
    // console.log("2",hodl);
    // console.log(oneBNBprice);
    await sethodl(hodl);
    await setdailyreward(
      (
        ((Number(a) * onebnb * 0.9) / Number(709271212874876)) *
        TotalbnbinrewardPool
      ).toFixed(5)
    );
    await setyearly(
      (
        ((Number(a) * onebnb * 0.9) / Number(709271212874876)) *
        TotalbnbinrewardPool *
        364
      ).toFixed(2)
    );
    var y =
      ((Number(a) * onebnb * 0.9) / Number(709271212874876)) *
      TotalbnbinrewardPool *
      364;
    await setrecover(Number(Number((input * 364) / y).toFixed(0)).toFixed(0));
  }

  return (
    <>
      <a
        href=''
        class='fixedbutton'
        data-toggle='modal'
        data-target='#InvestMent'
      >
        Reward Calculator
      </a>
      <section class='smallsection'>
        <div
          class='modal fade  '
          id='InvestMent'
          tabindex='-1'
          aria-labelledby='InvestMentLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog modal-lg '>
            <div class='modal-content modal_hodlInsvetmentcal'>
              <div class='modal-header'>
                <h5 class='modal-title' id='InvestMentLabel'>
                  HODL Investment & Rewards Calculator
                </h5>
                <button
                  type='button'
                  class='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div class='modal-body '>
                <div class='row'>
                  <div class='col-md-12'>
                    <form>
                      <div class='form-group row'>
                        <label
                          for='inputPassword'
                          class='col-sm-6 col-form-label'
                        >
                          Enter BNB Amount to Invest
                        </label>
                        {/* <input type="text" class="form-control" id="text" placeholder="Enter BNB Amount" onChange={e => setValues(e.target.value)}  /> */}
                        <div class='col-sm-6'>
                          <input
                            type='text'
                            class='form-control'
                            id='inputtext'
                            onChange={(e) => setValues(e.target.value)}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class='col-md-12 rewardcalc'>
                    <table class='table table-bordered table-striped text-center'>
                      <thead>
                        <tr>
                          <th scope='col'></th>
                          <th scope='col'>Existing</th>
                          <th scope='col'>New</th>
                          <th scope='col'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope='row'>$HODL Balance</th>
                          <td>
                            {new Intl.NumberFormat().format(
                              Number(LMBalanceuser).toFixed(0)
                            )}
                          </td>
                          <td>{new Intl.NumberFormat().format(hodl)}</td>
                          <td>
                            {new Intl.NumberFormat().format(
                              Number(Number(hodl).toFixed(0)) +
                                Number(Number(LMBalanceuser).toFixed(0))
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Reward Share %</th>
                          <td>
                            {(
                              (Number(bnbreward) /
                                Number(TotalbnbinrewardPool)) *
                              100
                            ).toFixed(3)}{' '}
                            %
                          </td>
                          <td>
                            {Number(
                              (dailyreward / TotalbnbinrewardPool) * 100
                            ).toFixed(3)}{' '}
                            %
                          </td>

                          <td>
                            {(
                              (Number(bnbreward) /
                                Number(TotalbnbinrewardPool)) *
                                100 +
                              Number((dailyreward / TotalbnbinrewardPool) * 100)
                            ).toFixed(3)}{' '}
                            %
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Daily Rewards in BNB*</th>
                          <td>{Number(bnbreward).toFixed(3)}</td>
                          <td>{Number(dailyreward).toFixed(3)}</td>
                          <td>
                            {(Number(bnbreward) + Number(dailyreward)).toFixed(
                              3
                            )}
                          </td>
                        </tr>
                        <tr>
                          <th scope='row'>Yearly Rewards in BNB*</th>
                          <td>{(Number(bnbreward) * 364).toFixed(2)}</td>
                          <td>{Number(yearly).toFixed(2)}</td>
                          <td>
                            {Number(
                              Number(Number(bnbreward) * 364) + Number(yearly)
                            ).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class='button_cacla'>
                    <a
                      href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86'
                      target='_blank'
                      class='btn-get-started scrollto'
                    >
                      Buy HODL
                    </a>
                  </div>

                  <div className='text-center fsize'>
                    {' '}
                    <br></br>{' '}
                    <p className='text-center'>
                      *These are only Estimates and not a Financial Advice.
                    </p>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id='main'>
    

          <section
            id='services'
            className='services section-bg section_feature dashboard_page mb-0 pb-0 pt-2'
          >
            <div className='container' data-aos='fade-up'>
              <div className='row mt-3'>
                <div
                  className='col-xl-12 col-md-12 d-flex align-items-stretch mt-xl-0'
                  data-aos='zoom-in'
                  data-aos-delay='300'
                >
                  <div className='icon-box'>
                    <h5>
                      My collectable BNB: {Number(bnbreward).toFixed(5)} BNB{' '}
                    </h5>

                    <h6 style={{ color: 'DarkCyan' }}>
                      *Forecasted Annual BNB Rewards:{' '}
                      {(Number(bnbreward) * 364).toFixed(3)} BNB
                    </h6>

                    <p>
                      *Pool and Rewards are always changing based on buys,
                      sells, collects by others and your percentage holdings.
                    </p>

                    <br></br>

                    {!user && nextAvailableclaim == 0 && (
                      <h5 style={{ color: 'red' }}>
                        Network Error: Please Try Again Later Or Use a Different
                        Browser
                      </h5>
                    )}

                    {!user && nextAvailableclaim != 0 && (
                      <h5>
                        Next Collect Date:{' '}
                        {new Date(nextAvailableclaim * 1000).toLocaleString(
                          'en-US',
                          { weekday: 'long' }
                        )}
                        ,{' '}
                        {new Date(nextAvailableclaim * 1000).toLocaleString(
                          'en-US',
                          { month: 'long' }
                        )}{' '}
                        {new Date(nextAvailableclaim * 1000).toLocaleString(
                          'en-US',
                          { day: 'numeric' }
                        )}
                        ,{' '}
                        {new Date(nextAvailableclaim * 1000).toLocaleString(
                          'en-US',
                          { year: 'numeric' }
                        )}{' '}
                        {new Date(nextAvailableclaim * 1000).toLocaleString(
                          'en-US',
                          { hour: 'numeric', minute: 'numeric', hour12: true }
                        )}
                      </h5>
                    )}

                    {user && (
                      <h5>
                        Next Collect Date: You need to Buy and Hold Tokens to
                        Earn BNB
                      </h5>
                    )}

                    <div className='d-flex font-weight-bold text-secondary mt-3'>
                      <div className='mr-2 d-flex align-items-center'>
                        <h5 className='mb-0 mr-2'>ReInvest</h5>
                        <div>
                        <img height={40} className='w-auto' src={Hodl2Image} />
                        </div>
                      </div>
                      <div className='ml-auto d-flex align-items-center'>
                        <div>         
                          <img height={40} className='w-auto' src={BNBImage} />
                        </div>
                        <h5 className='mb-0 ml-2'>BNB Reward</h5>
                      </div>
                    </div>

                    <RangeSlider
                      variant='info'
                      size='lg'
                      min='0'
                      max='100'
                      value={valueSlider}
                      onChange={(e) => setValueSlider(e.target.value)}
                      tooltip='off'
                      bsPrefix='range-slider'
                    />

                    <div className='d-flex font-weight-bold text-secondary'>
                      <div className='mr-2'>
                      {100 - valueSlider}% Re-Invest
                      </div>
                      <div className='ml-auto'>
                        {valueSlider}% <span className='text-primary'>BNB</span>{' '}
                        Reward
                      </div>
                    </div>

                    <div className='Collect_MONEY mt-5'>
                      {!user &&
                      nextAvailableclaim < Math.round(Date.now() / 1000) &&
                      bnbreward > 0 ? (
                        <a
                          onClick={claim}
                          className='COLLECTION_MONEY bubbly-button'
                        >
                          Collect Rewards{' '}
                        </a>
                      ) : !user &&
                        nextAvailableclaim - Math.round(Date.now() / 1000) >
                          946684782 ? (
                        <div>
                          <p style={{ color: 'red' }}>
                            Your Wallet is Under Zero Balance Punishment!
                          </p>
                          <a
                            onClick={() => {
                              swalreact(
                                <div>
                                  <h5>
                                    Your wallet is under Zero Balance
                                    Punishment. This occurs due to selling of
                                    all HODL tokens.{' '}
                                  </h5>
                                  <h5>
                                    <br></br>
                                    To continue earning BNB rewards please buy
                                    HODL 2.0 tokens or transfer to a New Wallet.
                                  </h5>
                                </div>
                              );
                            }}
                            className='COLLECTION_MONEY bubbly-button'
                          >
                            More Information !
                          </a>
                        </div>
                      ) : !user &&
                        nextAvailableclaim > Math.round(Date.now() / 1000) &&
                        bnbreward > 0 ? (
                        <a
                          onClick={() => {
                            swalreact(
                              <div>
                                <h5>
                                  "Please wait till your collectible date is
                                  reached"
                                </h5>
                                <p>
                                  Your Collectible Date is{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    weekday: 'long',
                                  })}
                                  ,{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    month: 'long',
                                  })}{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', { day: 'numeric' })}
                                  ,{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    year: 'numeric',
                                  })}{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                  })}
                                </p>
                              </div>
                            );
                          }}
                          className='COLLECTION_MONEY bubbly-button'
                        >
                          Collect Rewards{' '}
                        </a>
                      ) : !user &&
                        (nextAvailableclaim < Math.round(Date.now() / 1000) ||
                          nextAvailableclaim > Math.round(Date.now() / 1000)) &&
                        bnbreward <= 0 &&
                        nextAvailableclaim != 0 ? (
                        <div>
                          <p style={{ color: 'red' }}>
                            Your Wallet is Under Zero Balance Punishment!
                          </p>
                          <a
                            onClick={() => {
                              swalreact(
                                <div>
                                  <h5>
                                    You are on Zero HODL balance Punishment,
                                    Please buy HODL 2.0 from new wallet to
                                    participate in HODL BNB rewards.
                                  </h5>
                                </div>
                              );
                            }}
                            className='COLLECTION_MONEY bubbly-button'
                          >
                            More Information !
                          </a>
                        </div>
                      ) : !user && nextAvailableclaim == 0 ? (
                        <div>
                          {/* <p style={{ color: 'red' }}>Your Wallet is Under Zero Balance Punishment!</p>     */}
                          {/* <a onClick = {()=> {swalreact(<div><h5>You are on Zero HODL balance Punishment, Please buy HODL from new wallet to participate in HODL BNB rewards.</h5></div>)}} className="COLLECTION_MONEY bubbly-button">More Information !</a>  */}
                        </div>
                      ) : (
                        <a
                          onClick={buylink}
                          className='COLLECTION_MONEY bubbly-button px-4'
                        >
                          Claim Reward
                        </a>
                      )}
                    </div>
                    <br></br>
                    {bnbreward >= 1 && (
                      <p>
                        {' '}
                        20% of reward will be donated towards charity.
                        <a
                          href='https://hodltoken.gitbook.io/hodl/features/charities-collection'
                          target='_blank'
                        >
                          {' '}
                          More Info
                        </a>{' '}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
      

 




        <section className='services section-bg section_feature dashboard_page mb-0 pb-0 pt-2'>
          <div className='container' data-aos='fade-up'>
            <div className='mb-4 text-center'>
              <h3 className='mb-0'>YOUR INFORMATION </h3>
            </div>
            <div className='row row-cols-2 row-cols-lg-5'>
              <div
                className='p-2 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='mb-2'>
                    <img
                      height={50}
                      className='d-block mx-auto'
                      src={Iconp1}
                      alt='...'
                    />
                  </div>
                  <h6>My Collectable Rewards</h6>
                  <p>
                  {Number(bnbreward).toFixed(5)} BNB{' '}
                  </p>
                </div>
              </div>
              <div
                className='p-2 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='mb-2'>
                    <img
                      height={50}
                      className='d-block mx-auto'
                      src={Iconp2}
                      alt='...'
                    />
                  </div>
                  <h6>Next Collection Date</h6>
                 <p>   {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    weekday: 'long',
                                  })}
                                  ,{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    month: 'long',
                                  })}{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', { day: 'numeric' })}
                                  ,{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    year: 'numeric',
                                  })}{' '}
                                  {new Date(
                                    nextAvailableclaim * 1000
                                  ).toLocaleString('en-US', {
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    hour12: true,
                                  })}      </p>     
                </div>
              </div>
              <div
                className='p-2 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='mb-2'>
                    <img
                      height={50}
                      className='d-block mx-auto'
                      src={Iconp3}
                      alt='...'
                    />
                  </div>
                  <h6>BNB Collected Till Date on 2.0</h6>
                  <p>
                  {userclaimBnb.toFixed(2)}
                  </p> 
                </div>
              </div>
              <div
                className='p-2 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='mb-2'>
                    <img
                      height={50}
                      className='d-block mx-auto'
                      src={Iconp4}
                      alt='...'
                    />
                  </div>
                  <h6>HODL Re-Invested Till Date on 2.0</h6>
                   <p>
                   {userreinvested.toFixed(0)}
                  </p> 
                </div>
              </div>
              <div
                className='p-2 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='mb-2'>
                    <img
                      height={50}
                      className='d-block mx-auto'
                      src={Iconp5}
                      alt='...'
                    />
                  </div>
                  <h6>Your HODL 2.0 Balance </h6>
                   <p>
                    $HODL {new Intl.NumberFormat().format(LMBalanceuser)}
                  </p> 
                </div>
              </div>
            </div>
          </div>
        </section>



        <section
          id='services'
          className='services section-bg section_feature dashboard_page mb-0 pb-0 pt-2'
        >
          <div className='container' data-aos='fade-up'>
            <div className='mb-5 text-center'>
              <h3 className='mb-0'>HODL 2.0 UNIVERSE INFORMATION</h3>
            </div>
            <div className='row'>
              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon3} />
                  </div>
                  <h5>Max Transaction Amount</h5>
                  <p>
                    $HODL {new Intl.NumberFormat().format(maxTransactionAmount)}{' '}
                  </p>
                  {/* <p>$HODL 10,000,000,000,000 </p> */}
                </div>
              </div>
              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch mt-md-0'
                data-aos='zoom-in'
                data-aos-delay='200'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon8} />
                  </div>
                  <h5>Total liquidity pool</h5>
                  <p>
                    {/* $ { new Intl.NumberFormat().format(oneBNBprice * LPbnb * 2 )}   */}
                    {/* formatValue = value => `$ ${new Intl.NumberFormat().format(value)}`;                     */}
                    <AnimatedNumber
                      value={(oneBNBprice * LPbnb * 2).toFixed(2)}
                      formatValue={(value) =>
                        `$ ${new Intl.NumberFormat().format(value)}`
                      }
                      duration={300}
                    />
                  </p>
                </div>
              </div>
              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='300'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon1} />
                  </div>
                  <h5>Current 1 mil $HODL Price</h5>
                  <p>
                    {/* $ { (( Number(1000000) * Number(LPbnb) ) / Number(LMbalanceLPpool)) * oneBNBprice}   */}
                    <AnimatedNumber
                      value={
                        ((Number(1000000) * Number(LPbnb)) /
                          Number(LMbalanceLPpool)) *
                        oneBNBprice
                      }
                      formatValue={(value) => `$ ${value.toFixed(8)}`}
                      duration={300}
                    />
                  </p>
                </div>
              </div>
              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='400'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon2} />
                  </div>
                  <h5>Total BNB in liquidity pool</h5>
                  <p>
                    {/* BNB {  new Intl.NumberFormat().format(LPbnb)} */}
                    {/* { //console.log("renderlp",LPbnb) }  */}
                    {/* {LPbnb} */}
                    <AnimatedNumber
                      value={LPbnb}
                      formatValue={(value) =>
                        `BNB ${new Intl.NumberFormat().format(value)}`
                      }
                      duration={300}
                    />
                    {/* <p>BNB NaN */}
                  </p>
                </div>
              </div>

              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch mt-xl-0'
                data-aos='zoom-in'
                data-aos-delay='400'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon11} />
                  </div>
                  <h5>Total BNB in reward pool</h5>
                  <p>
                    {/* BNB {   new Intl.NumberFormat().format(TotalbnbinrewardPool)} */}
                    {/* <AnimatedNumber
                                value={  new Intl.NumberFormat().format(TotalbnbinrewardPool)}
                                formatValue={(value)=> `BNB ${new Intl.NumberFormat().format(value)}` }
                                duration={300}
                                /> */}

                    <AnimatedNumber
                      value={TotalbnbinrewardPool}
                      formatValue={(value) =>
                        `BNB ${new Intl.NumberFormat().format(value)}`
                      }
                      duration={300}
                    />

                    {/* <p>BNB NaN </p> */}
                  </p>
                </div>
              </div>

              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch'
                data-aos='zoom-in'
                data-aos-delay='100'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon4} />
                  </div>
                  <h5>Fibonacci Pool Limit</h5>
                  <p>BNB {new Intl.NumberFormat().format(rewardhardCap)}</p>
                   {/* <p> BNB 75.00</p> */}
                </div>
              </div>
           
           
              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch'
                data-aos='zoom-in'
                data-aos-delay='100'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Icon3} />
                  </div>
                  <h5>Total Reward Distributed</h5>
                  <p>$ {new Intl.NumberFormat().format((totaldistributedBnb + totalgasdistributed) * oneBNBprice )}</p>
                </div>
              </div>


              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch'
                data-aos='zoom-in'
                data-aos-delay='100'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Iconp4} />
                  </div>
                  <h5>Total HODL 2.0 Re-Invested</h5>
                  <p> {new Intl.NumberFormat().format(totalreinvested.toFixed(0))}</p>
                </div>
              </div>




              <div
                className='col-xl-4 col-md-6 d-flex align-items-stretch'
                data-aos='zoom-in'
                data-aos-delay='100'
              >
                <div className='icon-box'>
                  <div className='icon'>
                    <img src={Iconp1} />
                  </div>
                  <h5>Total Reflection Distributed</h5>
                  <p> {new Intl.NumberFormat().format(totalreflection.toFixed(0))}</p>
                </div>
              </div>
           
            </div>
          </div>
        </section>
        <section className='services section-bg section_feature dashboard_page mb-0 pb-0 pt-2'>
          <Migrate />
        </section>
        <section id='cta'></section>

        {/* 

            <section id="services" className="services section-bg section_feature dashboard_page mb-0 pb-0 pt-2">
                <div className="container" data-aos="fade-up">
                    <div className="row mt-3">
                        <div className="col-xl-12 col-md-12 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in"
                            data-aos-delay="300">
                            <div className="icon-box">
                                <div className="mb-3 row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label pt-0">Disruptive Transfer
                                        between 2 wallets</label>
                                    <div className="col-sm-10">
                                        Balance: {LMBalanceuser} HODL 
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Recipient (address)
                                    </label>
                                    <div className="col-sm-10">
                                        <input onKeyUp = {(e) => setaddress(e.target.value)} type="text" className="form-control" id="inputPassword" />
                                    </div>
                                    
                                </div>
                                <div className="mb-3 row">
                                    <label for="inputPassword" className="col-sm-2 col-form-label">Amount (HODL)
                                    </label>
                                    <div className="col-sm-10">
                                        <input onKeyUp = {(e) => setValue(e.target.value)} type="number" className="form-control" id="inputPassword" />
                                    </div>
                                </div>
                                <div className="Collect_MONEY mt-5 text-center">
                                    <a onClick = {submitform} className="COLLECTION_MONEY pl-5 pr-5">Send</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
    
     */}
      </main>
      <a href='#' className='back-to-top'>
        <i className='ri-arrow-up-line'></i>
      </a>
      <div id='preloader'></div>
    </>
  );
}
export default Dashboard;
