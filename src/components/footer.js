
import logo from '../images/logo.png'
function Footer() {
    return( 
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <img src={logo} alt="" className="img-fluid" />
                <br />
                <div className="social-links mt-3">
                  <a target="_blank" href="https://twitter.com/TokenHodl" className="twitter"><box-icon type="logo" name="twitter" color="white"></box-icon></a>
                  <a target="_blank" href="https://t.me/hodlinvestorgroup" className="twitter"><box-icon type="logo" name="telegram" color="white"></box-icon></a>
                  <a target="_blank" href="https://www.reddit.com/r/HodlToken/" className="twitter"><box-icon type="logo" name="reddit" color="white"></box-icon></a>
                  {/* <a target="_blank" href="https://github.com/hodltoken" className="twitter"><box-icon type="logo" name="github" color="white"></box-icon></a> */}
                  {/* <a href="#" className="facebook"><box-icon type="logo" name="facebook" color="white"></box-icon></a> */}
                  {/* <a href="#" className="instagram"><box-icon type="logo" name="instagram" color="white"></box-icon></a> */}
                  {/* <a href="#" className="google-plus"><box-icon type="logo" name="skype" color="white"></box-icon></a> */}
                  {/* <a href="#" className="linkedin"><box-icon type="logo" name="linkedin" color="white"></box-icon></a> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Important Links</h4>
                <ul> 
                <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5788105375ecF7F675C29e822FD85fCd84d4cd86" target="_blank">PancakeSwap</a></li>

                <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="#calc">Rewards Calculator</a></li>

                <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://hodltoken.net/dashboard" target="_blank">dApp</a></li>
               
               <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://app.unicrypt.network/amm/pancake-v2/pair/0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050"  target="_blank">Liquidity Locks</a></li>
                  <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://bscscan.com/address/0x5788105375ecF7F675C29e822FD85fCd84d4cd86#code" target="_blank">Contract</a></li>
                  <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://hodltoken.gitbook.io/hodl/" target="_blank">Documentation</a></li>
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://github.com/hodltoken" target="_blank">Github</a></li> */}
                  
                </ul> 
              </div>
              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Information</h4> 
                <ul>

                <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://t.me/hodlinvestorgroup" target="_blank">Join Telegram</a></li>
                <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://twitter.com/TokenHodl" target="_blank">Follow Twitter</a></li>
                 
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://www.coingecko.com/en/coins/hodl-token" target="_blank">CoinGecko</a></li> */}
       {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://coinmarketcap.com/currencies/hodl/" target="_blank">CoinMarketCap</a></li> */}
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://nomics.com/assets/hodl4-hodl-token" target="_blank">Nomics</a></li> */}
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://www.livecoinwatch.com/price/HodlToken-___HODL" target="_blank">LiveCoinWatch</a></li> */}
                  <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://poocoin.app/tokens/0x5788105375ecF7F675C29e822FD85fCd84d4cd86" target="_blank">PooCoin Chart</a></li>
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://www.coingecko.com/en/coins/hodl-token" target="_blank">Coingecko</a></li> */}
                  <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="https://finance.yahoo.com/news/hodl-token-deflationary-community-centric-110500775.html" target="_blank">Yahoo Finance</a></li>


                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="/guide">Guide</a></li> */}
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="#">Recent Mediums</a></li> */}
                  {/* <li><box-icon type="regular" pull="right" name="chevron-right" color="#47b2e4"></box-icon> <a href="#">Contact Us</a></li> */}
                </ul>
              </div>

              
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>HODLtoken</span></strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="/">HODL Inc.</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer;



