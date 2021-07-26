import {useState,useEffect} from 'react';
import IntroVideo from '../images/hodl2intro.mp4'
import videoBg from '../images/video.jpg'
import playBtn from '../images/thumbnail.jpeg'
var vid = '';
function Introduction(){
    const [playVideo, setVidStatus] = useState(false);
    useEffect(()=>{
      vid = document.getElementById("my-video");
    })
    function playMyVideo(){
      setVidStatus(true);
      vid.play();
    }    

    return (
        <section id="about" className="about video_section" style={{ backgroundImage: `url(${videoBg})` }}>
        <div className="container aos-init aos-animate" data-aos="fade-up">
         <div className="section-title">
            <h2>INTRODUCTION</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 video-box align-self-baseline aos-init aos-animate " data-aos="zoom-in" data-aos-delay="100">
              {!playVideo ?  <img src={playBtn} class="img-fluid" alt="" onClick={()=>playMyVideo()}/> : '' }
              <video className="vid" controls poster={playBtn} id="my-video" style={{ display: playVideo?'':'none' }}>
                    <source src={IntroVideo} type="video/mp4" />
              </video> 
            </div>
          </div>
        </div>
      </section>
    )
}
export default Introduction;