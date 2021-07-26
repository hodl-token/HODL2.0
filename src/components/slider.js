import img1 from '../images/slider/1.jpeg'
import img2 from '../images/slider/2.jpeg'
import img3 from '../images/slider/3.jpeg'
import img4 from '../images/slider/4.jpeg'
import img5 from '../images/slider/5.jpeg'
import img6 from '../images/slider/6.jpeg'
import img7 from '../images/slider/7.jpeg'
import img8 from '../images/slider/8.jpeg'
import Functions from '../functions';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


import OwlCarousel from "react-owl-carousel3";
// react-owl-carousel3
const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true,
  // padding: "10px",
};



function Slider(){
     
    Functions()
    return(
   <div>


<section class="pb-0 pt-0 section-bg">
      <div class="section-title slider_title">
          <h2 >PR &amp; Affiliations</h2>
         
        </div>
    </section>


    <section id="cta" class="pb-3 pt-3">
       <div class="container" data-aos="zoom-in">

         <div class="row">

           <div class="col-lg-12">

           </div>
           </div>
    </div>
    </section>
    
   
      <section id="clients" class="clients client_slider"> 
       <div class="container-fluid" data-aos="zoom-in">
          <div class="row justify-content-center"> 
            <div class="col-xl-12"> 
           
            <BrowserView>
              <OwlCarousel items={5}  autoplay ={true}  center={true} rewind={false} loop={true} slideBy={1}>



              {/* <div class="owl-carousel clients-carousel"> */}
        <a href="https://coinmarketcap.com/currencies/hodl/" target="_blank">   <img src={img1} alt="https://coinmarketcap.com/currencies/hodl/"/>  </a>
        <a href="https://www.coingecko.com/en/coins/hodl-token" target="_blank">   <img src={img2} alt="https://www.coingecko.com/en/coins/hodl-token"/>  </a>
               {/* <img src={img3} alt=""/> */}
               <a href="https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html" target="_blank">             <img src={img4} alt="https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html"/>  </a>
               <a href="https://markets.businessinsider.com/news/stocks/hodl-token-a-deflationary-and-community-centric-system-to-generate-passive-income-1030458258" target="_blank"><img src={img5} alt="https://markets.businessinsider.com/news/stocks/hodl-token-a-deflationary-and-community-centric-system-to-generate-passive-income-1030458258"/>   </a>
               {/* <img src={img6} alt=""/> */}
               {/* <img src={img7} alt="https://nomics.com/assets/hodl4-hodl-token#chart"/> */}
               <a href="https://www.livecoinwatch.com/price/HodlToken-___HODL" target="_blank">    <img src={img8} alt="https://www.livecoinwatch.com/price/HodlToken-___HODL"/>  </a>
           {/* </div>  */}
           </OwlCarousel>
           </BrowserView>
      
           <MobileView>
           <OwlCarousel items={2}  autoplay ={true}  center={true} rewind={false} loop={true} slideBy={1}>
         
                    {/* <div class="owl-carousel clients-carousel"> */}
        <a href="https://coinmarketcap.com/currencies/hodl/" target="_blank">   <img src={img1} alt="https://coinmarketcap.com/currencies/hodl/"/>  </a>
        <a href="https://www.coingecko.com/en/coins/hodl-token" target="_blank">   <img src={img2} alt="https://www.coingecko.com/en/coins/hodl-token"/>  </a>
               {/* <img src={img3} alt=""/> */}
               <a href="https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html" target="_blank">             <img src={img4} alt="https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html"/>  </a>
               <a href="https://markets.businessinsider.com/news/stocks/hodl-token-a-deflationary-and-community-centric-system-to-generate-passive-income-1030458258" target="_blank"><img src={img5} alt="https://markets.businessinsider.com/news/stocks/hodl-token-a-deflationary-and-community-centric-system-to-generate-passive-income-1030458258"/>   </a>
               {/* <img src={img6} alt=""/> */}
               {/* <img src={img7} alt="https://nomics.com/assets/hodl4-hodl-token#chart"/> */}
               <a href="https://www.livecoinwatch.com/price/HodlToken-___HODL" target="_blank">    <img src={img8} alt="https://www.livecoinwatch.com/price/HodlToken-___HODL"/>  </a>
           {/* </div>  */}
           </OwlCarousel>

           </MobileView>


           </div> 
         </div>
       </div> 
     </section> 


   
    </div>



)
}



export default Slider;

