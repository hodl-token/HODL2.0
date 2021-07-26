import logo from '../images/logo.png'
function Header() {
    return(
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

    <button type="button" class="mobile-nav-toggle d-lg-none "><box-icon type="regular" color="#47b2e4" name="list-ul"></box-icon></button>

      <a href="index.html" className="logo mr-auto"><img src={logo} alt="" className="img-fluid" /></a>
      <nav className="nav-menu d-none d-lg-block">
        <ul>
         <li><a href="#about">Introduction</a></li>
        
          <li ><a href="#tokenomics">Tokenomics</a></li>
          <li><a href="#calc">Rewards Calculator</a></li>
          <li><a href="#why-us">Roadmap</a></li>
          <li><a href="https://hodltoken.gitbook.io/hodl/" target="_blank">Documentation</a></li>
          <li><a href="#faq">FAQs</a></li>
          
          {/* <li><a href="#team">Medium</a></li> */}
        </ul>
      </nav>
      <a href="/dashboard" className="get-started-btn scrollto">Launch App</a>
    </div>
  </header>)
}
export default Header;