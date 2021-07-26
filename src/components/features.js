import Icons1 from '../images/icons/9.png';
import Icons2 from '../images/icons/8.png';
import Icons3 from '../images/icons/11.png';
import Icons4 from '../images/icons/10.png';
import Icons5 from '../images/icons/12.png';
import Icons6 from '../images/icons/7.png';
import sectionBg from '../images/world.jpg';

function Features() {
  return (
    <section
      id='services'
      className='services section-bg section_feature'
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      <div className='container' data-aos='fade-up'>
        <div className='section-title'>
          <h2>FEATURES</h2>
        </div>

        <div className='row'>
          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch  mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  <span className='text-focus-in text-uppercase'>New</span>
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  {/* <h4 className="righttt">V2</h4> */}
                  <img src={Icons5} />
                </div>
                <h4>
                  <a href=''>Auto Trigerred Buy-Backs </a>
                </h4>
                <p>
                  Two Way Auto Triggered Buy-Back Mechanisms to Ensure
                  Sustainable Growth of Price & Volume Strategically. The
                  buybacks are triggered by each eligible Sell Transations and
                  Re-Invest call functions.
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  <span className='text-focus-in text-uppercase'>New</span>
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons5} />
                </div>
                <h4>
                  <a href=''>Fibonacci Pools</a>
                </h4>
                <p>
                  Fibonacci pools to make the reward pool more sustainable. The
                  amount of reward Distribution will increase with improving
                  market cap and will sustain in case of volume decrease at any
                  given time making it sustainable for long term.
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  <span className='text-focus-in text-uppercase'>New</span>
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons5} />
                </div>
                <h4>
                  <a href=''>NO-GAS FEE</a>
                </h4>
                <p>
                  We are all “HODLers.” The HODL 2.0 ensures re-distribution of
                  any gas fee paid to Claim or Re-invest Rewards. This ensures that all hodlers gain equal benefits from contract and further no requirement for small investor pools.
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch'
            data-aos='zoom-in'
            data-aos-delay='100'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  <span className='text-focus-in text-uppercase'>New</span>
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons6} />
                </div>
                <h4>
                  <a href=''>Rewards & Re-Invest</a>
                </h4>
                <p>
                  Reward & Re-Investment Percentage selection to automatically
                  Re-invest the claimed BNB into HODL. There is No Transaction
                  Fee or Tax when you Re-Invest. Chose your own Re-Invest to
                  Reward Claim Domination !
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='300'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  {/* <span className='text-focus-in text-uppercase'>New</span> */}
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons1} />
                </div>
                <h4>
                  <a href=''>Earn $BNB by hodling $HODL</a>
                </h4>
                <p>
                  4% of every transaction is taken and redistributed to all
                  $HODL holders in <strong>$BNB</strong>. Accumulate $BNB by
                  hodling the $HODL Token !
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-md-0'
            data-aos='zoom-in'
            data-aos-delay='200'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  {/* <span className='text-focus-in text-uppercase'>New</span> */}
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons2} />
                </div>
                <h4>
                  <a href=''>Automatic Liquidity Pool</a>
                </h4>
                <p>
                  2% of every transaction contributes toward automatically
                  generating further liquidity on Pancake Swap. Benefiting long
                  term for $HODL holders the most!
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='300'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  {/* <span className='text-focus-in text-uppercase'>New</span> */}
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons3} />
                </div>
                <h4>
                  <a href=''>RFI Static Rewards</a>
                </h4>
                <p>
                  2% of every transaction is taken and re distributed to all
                  $HODL holders. The burn address is also a holder thus each
                  transaction helps deflate the supply.
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  {/* <span className='text-focus-in text-uppercase'>New</span> */}
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons4} />
                </div>
                <h4>
                  <a href=''>Inbuilt Anti-Whale Mechanism</a>
                </h4>
                <p>
                  Transaction (Sell/Buy) that trade more than 0.1% of the total
                  supply will be rejected. <br />
                  Whales who make transfer (between 2 wallets) that is larger
                  than 0.1% of the total supply will be charged 1BNB which will
                  further be donated to Charities
                </p>
              </div>
            </div>
          </div>

          <div
            className='col-xl-4 col-md-6 d-flex align-items-stretch   mt-xl-0'
            data-aos='zoom-in'
            data-aos-delay='400'
          >
            <div className='icon-box p-0'>
              <div className='d-flex px-3 pt-2'>
                <div className='ml-auto'>
                  {/* <span className='text-focus-in text-uppercase'>New</span> */}
                </div>
              </div>
              <div className='p-4'>
                <div className='icon'>
                  <img src={Icons5} />
                </div>
                <h4>
                  <a href=''>Highly Secured</a>
                </h4>
                <p>
                  All Initial Liquidity Provided will be locked with Unicrypt.
                  The contract is Trustless for $HODL community. We will release
                  the audit reports shortly as they are under progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
