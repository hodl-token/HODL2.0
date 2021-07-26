function Faq(){
  return(
  <section id="faq" className="faq section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-title">
        <h2>FAQ</h2>
      </div>
      <div className="faq-list">
        <ul>
          <li data-aos="fade-up" data-aos-delay="100">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> 
            <a data-toggle="collapse" className="collapse" href="#faq-list-1">How many BNB can I claim?
              <span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>

            <span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>

          </a>
            <div id="faq-list-1" className="collapse show" data-parent=".faq-list">
              <p>
                You can claim the amount of the BNB based on the ratio of $HODL you hold/the total BNB pool.
For example, you hold 1% of $HODL, you can withdraw 1% of the BNB reward pool.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-2" className="collapsed">What is the BNB pool?
<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-2" className="collapse" data-parent=".faq-list">
              <p>
                4% of every transaction is taken and re-distributed to all Hodl holders in $BNB. This amount of BNB called the BNB pool.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-3" className="collapsed">What if I don’t claim BNB reward in my cycle?
<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-3" className="collapse" data-parent=".faq-list">
              <p>
                If you don’t claim at your cycle and other holders claim, the BNB pool will reduce.
So then the ratio of your $HODL/BNB pool reduces as well. That’s why you should claim as soon as your cycle is ready
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-4" className="collapsed">What do I need to do to passively earn BNB?
<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-4" className="collapse" data-parent=".faq-list">
              <p>
                Simply holding $HODL will earn you a share of the BNB rewards pool, proportional to the amount of $HODL you hold. You will also earn $HODL passively too, which gets put straight in your wallet
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-5" className="collapsed">When can I claim my BNB?
<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-5" className="collapse" data-parent=".faq-list">
              <p>
                The specific time you can claim depends on a few factors. The collection time is every 24 hours. Be aware however, that if you purchase a significant amount more $HODL than your initial purchase, your collection time will be moved back, and if you sell all your $HODL and buy back in, your collection date will be pushed years out into the future. This is not a bug, it's a feature that helps prevent scalping. 
                
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-6" className="collapsed">What time zone is the Hodl app on? (relating to reward claim timer)

<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-6" className="collapse" data-parent=".faq-list">
              <p>
                It syncs to your device time so the answer is whatever time zone you are in.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-7" className="collapsed">How can I claim my BNB?


<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-7" className="collapse" data-parent=".faq-list">
              <p>
                Simply have your wallet connected through the Hodl Dapp on the website, click "Collect my bnb". Please note that you must have BNB in your wallet that will be used to cover transfer fees.
              </p>
            </div>
          </li>

           <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-8" className="collapsed">Does my BNB stack if I don't claim it?



<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-8" className="collapse" data-parent=".faq-list">
              <p>
                No. This is because it's not "your" BNB, meaning it is not an amount of BNB that is set aside for you, but rather a set share of the pool of BNB. As people claim their BNB, the total pool will decrease, which in turn means the BNB value of your set share will decrease. In short, it is best to claim your BNB as soon as possible.
              </p>
            </div>
          </li>



<li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-9" className="collapsed">Why is my collectible BNB less than yesterday?




<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-9" className="collapse" data-parent=".faq-list">
              <p>
                Several factors impact BNB claim amount.<br/>
1. The amount of BNB in the pool is distributed based on percentage. The more BNB there, the more you get, however, it is ALWAYS based on percentage. The less there, the less you get. IT IS NOT CUMULATIVE<br/>
2. The more people claim, the less BNB will be available for everyone else<br/>
3. There is a cycle before you can collect BNB and the more transactions you make with this coin, the more the cycle changes. Be aware of that when you are thinking of selling high to buy low
              </p>
            </div>
          </li>

          {/* <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-10" className="collapsed">Why doesn't my BNB/$HODL balance show up on the Hodl app?





<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>
<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-10" className="collapse" data-parent=".faq-list">
              <p>
              I cannot answer this one from personal experience, but in the telegram people have had success by watching this video: https://www.youtube.com/watch?v=IUWTFEN-1tI&ab_channel=ByeForNow
<br/><br/>
It should also be noted that this issue seem to be more prevalent among those who use mobile devices and/or TrustWallet. Personally, I use a desktop computer and MetaMask and have had no issue.
              </p>
            </div>
          </li> */}

          {/* <li data-aos="fade-up" data-aos-delay="500">
            <span className="icon-help"><box-icon name="help-circle"  pull="left" color="#47b2e4"></box-icon></span> <a data-toggle="collapse" href="#faq-list-11" className="collapsed">When moon/pump/etc?





<span className="icon-show"><box-icon name="chevron-down" color="#37517e"></box-icon></span>

<span className="icon-close"><box-icon name="chevron-up" color="#47b2e4"></box-icon></span>
</a>
            <div id="faq-list-11" className="collapse" data-parent=".faq-list">
              <p>
                Patience, my friends. This project is still in infancy as of my writing this (15th of April, 1:45PM UTC), and has already seen several significant milestones. In the coming days, with more milestones, perhaps we will all see if the moon really is made of cheese :)
              </p>
            </div>
          </li> */}
        </ul>
      </div>

    </div>
  </section>
  )
}
export default Faq;