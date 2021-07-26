// function Audit(){
//     return (
//     <section id="cta" >
//       <div className="container" data-aos="zoom-in">
//         <div className="row">
//           <div className="col-lg-6 text-center ">
//             <h3 className="text-center">Audited By TechRate</h3>
         
//           <div class="button_cacla"> 
//                   <a href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/HODL.pdf" class="btn-get-started scrollto reward_button123" target="_blank">Click Here!</a>
//                </div>
//                </div>
//              <div><br></br></div>

//                <div className="col-lg-6 text-center ">
//             <h3 className="text-center">PooCoin Chart</h3>
         
//           <div class="button_cacla"> 
//                   <a href="https://poocoin.app/tokens/0x5788105375ecF7F675C29e822FD85fCd84d4cd86" class="btn-get-started scrollto reward_button123"target="_blank">Click Here!</a>
//                </div>
//                </div>


//           {/* <div className="col-lg-3 cta-btn-container text-center">
//              <div className="social-links  social_links ">
             
//             </div>
//             </div> */}
//         </div>
//       </div>
//     </section>
//     )
//   }
//   export default Audit;


function Audit(){
  return(
      <section id="cta" >
      <div className="container" data-aos="zoom-in">

        <div className="row official_information">

        <div className="col-lg-4 text-center text-lg-left burn">
            <h3>PooCoin Chart</h3>
            <br />
             <a className="cta-btn align-middle" href="https://poocoin.app/tokens/0x5788105375ecF7F675C29e822FD85fCd84d4cd86" target="_blank">Click Here!</a>

          </div>


          <div className="col-lg-4 text-center text-lg-left">
            <h3>Audited By TechRate</h3>
            <br />
             <a className="cta-btn align-middle" href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/HODL.pdf" target="_blank">Click Here!</a>

          </div>

        

          <div className="col-lg-4 text-center text-lg-left">
            <h3>DexGuru Chart</h3>
            <br />
             <a className="cta-btn align-middle" href="https://app.unicrypt.network/amm/pancake-v2/pair/0x6D5023CBF2073eb4f0C78A59040826c8F2FDe050" target="_blank">Click Here!</a>

          </div>

        </div>

      </div>
    </section>
  )
}
export default Audit;