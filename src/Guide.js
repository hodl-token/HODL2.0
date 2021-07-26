import React,{useEffect} from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Functions from './functions';

import guide1img from './images/guide/1.png'
import guide2img from './images/guide/2.png'
import guide3img from './images/guide/3.png'
import guide4img from './images/guide/4.jpg'
import guide5img from './images/guide/5.png'
import guide6img from './images/guidee/img6.jpeg'
import guide7img from './images/guidee/img7.jpeg'
import guide8img from './images/guidee/img8.jpeg'
import guide9img from './images/guidee/img9.jpeg'
import guide10img from './images/guidee/img10.jpeg'
import guide11img from './images/guidee/img11.jpeg'
import guide12img from './images/guidee/img12.jpeg'
// import guide13img from './images/guidee/13.png'





function Guide() {
  useEffect(()=>{
    Functions()


    

    
  })
  return (
    <>
      <Header />
      <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-12 d-flex flex-column justify-content-center text-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>How to Buy $HOLD </h1>
          <h2 className="mb-3 welcome_content">via MetaMask on the browser (Laptop/PC) 


</h2>

        </div>
        
      </div>


      <div className="row pt-5 pb-3 price_coin">
        <div className="col-lg-12">
        <div className="d-lg-flex price_guide justify-content-center">

            <a href="#about" className="btn-get-started scrollto">Create MetaMask
              <br />Wallet
            </a>

            <a href="#about" className="btn-get-started scrollto ">Buy $HOLD on
              <br />PancakeSwap
            </a>

           


            </div>
          </div>
          <div className="d-lg-flex price_guide justify-content-center cbnb mt-2">

          <a href="#about" className="btn-get-started scrollto ">Collect 
              <br />$BNB
            </a>

         


            </div>
          </div>
          <br></br>

            
          
          
      </div>
    

  </section>
      <main id="main">
      <section id="about" className="about video_section">
      <div className="container aos-init aos-animate" data-aos="fade-up">

       <div className="section-title">
          <h2>Create the metamask wallet</h2>
         
        </div>

        <div className="row">

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice  mb-5">
            
            <p> <strong>1. Download/Install MetaMask from Chrome at this link: https://metamask.io/download.html</strong></p>

            <img src={guide1img} className="img-thumbnail" />
          </div>


          </div>

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>2. Open a wallet or import one, be sure to store your keyphrase safely</strong></p>

            <img src={guide2img} className="img-thumbnail  " />
          </div>


          </div>

           <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>3. Setting BSC network - You can buy HODL (HODL) with the BSC network only.</strong></p>
<div className="guidee_image">
            <img src={guide3img} className="img-thumbnail  " />
            <img src={guide4img} className="img-thumbnail  " />
</div>
            <p className="mt-5">The BSC Network information <br />
1. Network Name: <span>BSC Mainnet</span> <br />
2. New RPC URL: <span>https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/</span> <br />
3. ChainID: <span>56, or 0x38 if 56 doesn’t work</span> <br />
4. Symbol: <span>BNB</span> <br />
5. Block Explorer URL: <span>https://bscscan.com/</span></p>

          </div>


          </div>

           <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>4. After saving, you’re now connected to the BSC network</strong></p>

            <img src={guide5img} className="img-thumbnail  " />
        

            <p className="mt-5">
<span>Be sure that you transfer BNB to your wallet to buy $HOLD … <br />
Now, we can access HODL DApp and link to PancakeSwap to buy $HOLD.</span> <br />
</p>

          </div>


          </div>

        </div>

      </div>
    </section>



    <section id="about" className="about video_section">
      <div className="container aos-init aos-animate" data-aos="fade-up">

       <div className="section-title">
          <h2>Buy $HOLD on PancakeSwap</h2>
         
        </div>

        <div className="row">

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice  mb-5">
            
            <p> <strong>1. Access https://HODLtoken.net/dashboard <br />
Click on the <a href="#">Buy $HOLD</a> button to redirect to Pancakeswap and buy...</strong></p>

            <img src={guide6img} className="img-thumbnail  " />
          </div>


          </div>

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p className="text-left"> <strong>2. Buy HODL on Pancakeswap <br />
- Step 1: Check I understand -{'>'} Click “Continue”</strong></p>

            <img src={guide7img} className="img-thumbnail  " />

            <p className="mt-5">Note: if you can’t see this popup, try to reload this page again and make sure your internet is good <br />
1.  If you have not connected to the wallet, please connect it before you buy. Make sure your wallet is on BSC Network. <br />
2.  After connecting to the wallet, fill out the number of HODL you want to buy <br /> <br />
<span>*Tip: You can see the maximum transaction amount of HODL/BNB on the HODLtoken.net (The anti-whales feature)</span></p>


<img src={guide8img} className="img-thumbnail guide_mainimage " />
          </div>


          </div>

           <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong> Step 3: After filling out the amount and setting the Slippage Tolerance, Click on Swap -{'>'} Confirm Swap to buy HODL</strong></p>
            <div className="guidee_image">
            <img src={guide9img} className="img-thumbnail  " />
            <img src={guide10img} className="img-thumbnail  " />

            </div>



          </div>


          </div>

           <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>- Step 4: Confirm to buy HODL on the MetaMask extension</strong></p>

            <img src={guide11img} className="img-thumbnail  " />
        

            <p className="mt-5">
<span>Be sure that you transfer BNB to your wallet to buy HODL … <br />
Now, we can access HODL DApp and link to PancakeSwap to buy HODL.</span> <br />
</p>

          </div>


          </div>

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>- Step 5: Now you can see the result here:</strong></p>
            <div className="guidee_image">
              
               {/* <img src={guide11img} className="img-thumbnail  " /> */}
            <img src={guide12img} className="img-thumbnail  " />

            </div>
           
        

            <p className="mt-5">
<span>Be sure that you transfer BNB to your wallet to buy HODL … <br />
Now, we can access HODL DApp and link to PancakeSwap to buy HODL.</span> <br />
</p>

          </div>


          </div>

        </div>

      </div>
    </section>



    <section id="about" className="about video_section">
      <div className="container aos-init aos-animate" data-aos="fade-up">

       <div className="section-title">
          <h2>Collect $BNB</h2>
         
        </div>

        <div className="row">

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice  mb-5">
            
            <p> <strong>- Back to the MoonRat Dapp to check your amount, the time you can claim BNB from the reward pool</strong></p>

            <img src={guide1img} className="img-thumbnail" />
          </div>


          </div>

          <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>2. Open a wallet or import one, be sure to store your keyphrase safely</strong></p>

            <img src={guide2img} className="img-thumbnail  " />
          </div>


          </div>

           <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
          
          <div className="guide_notice mb-5">
            
            <p> <strong>3. Setting BSC network - You can buy HODL (HODL) with the BSC network only.</strong></p>
<div className="guidee_image">
            <img src={guide3img} className="img-thumbnail  " />
            <img src={guide4img} className="img-thumbnail  " />
</div>
            <p className="mt-5">The BSC Network information <br />
1. Network Name: <span>BSC Mainnet</span> <br />
2. New RPC URL: <span>https://bsc-dataseed1.binance.org/ or https://bsc-dataseed2.binance.org/</span> <br />
3. ChainID: <span>56, or 0x38 if 56 doesn’t work</span> <br />
4. Symbol: <span>BNB</span> <br />
5. Block Explorer URL: <span>https://bscscan.com/</span></p>

          </div>


          </div>

         

        </div>

      </div>
    </section>






      </main>
      <Footer />
      <a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
      <div id="preloader"></div>






    </>
  );
}

export default Guide;
