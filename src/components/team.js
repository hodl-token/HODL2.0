import HeroImg from '../images/hero-img.png'
function Team(){
    return(
        <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>TEAM</h2>
        </div>

        <div className="row content team_hodl">




          <div className="col-lg-4">

          </div>
          <div className="col-lg-4">
            <div className="shape">
              <img src={HeroImg} className="img-fluid animated" alt="" />
            <h4>Andrew - Head of Strategy</h4>
            </div>


          </div>
          <div className="col-lg-4">

            
          </div>

        </div>

        <div className="row content team_hodl">

          <div className="col-lg-4">

            <div className="shape">
              <img src={HeroImg} className="img-fluid animated" alt="" />
            <h4>Allen - Marketing Lead</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="shape">
              <img src={HeroImg} className="img-fluid animated" alt="" />
            <h4>Justin - Collaborations & Partnerships</h4>
            </div>
          </div>
          <div className="col-lg-4">
             <div className="shape">
              <img src={HeroImg} className="img-fluid animated" alt="" />
            <h4>JC Wright - Lead Developer</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}
export default Team;