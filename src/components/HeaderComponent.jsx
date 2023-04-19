export default function HeaderComponent(){
  return(
    <header id="header">
      <div className="container">
                <div className="gap">
                   <div className="left">
                       <a href="#section2">THE COUPLE</a>
                       <a href="#section4">EVENT & PARTIES</a>
                       <a href="#section5">GALLERY</a>
                   </div>
                   <div className="center">
                       <a href="#wrap" title="Home">
                           <img src="./img/logo-pink2.png.webp" alt="logo"/>
                           <img src="./img/logo-pink-mobile.png.webp" alt="logo"/>
                       </a>
                   </div>
                   <div className="right">
                       <a href="#section6">ATTENDING</a>
                       <a href="#section9">OUR BLOG</a>
                       <a href="#section10">LOCATION</a>
                   </div>
                   <div id="mobileMenu">
                       <a href="!#" className="mobile-menu-btn">
                           <i className="line line1"></i>
                           <i className="line line2"></i>
                           <i className="line line3"></i>
                          </a>
                      </div>
      
      
                   <div id="mobileSubMenu">
                       <ul>
                           <li><a href="#section2"  className="mobile-sub-btn">THE COUPLE</a></li>                        
                           <li><a href="#section4"  className="mobile-sub-btn">EVENT & PARTIES</a></li>
                           <li><a href="#section5"  className="mobile-sub-btn">GALLERY</a></li>                       
                           <li><a href="#section6"  className="mobile-sub-btn">ATTENDING</a></li>                        
                           <li><a href="#section9"  className="mobile-sub-btn">OUR BLOG</a></li>
                           <li><a href="#section10" className="mobile-sub-btn">LOCATION</a></li>
                       </ul>
                   </div>
   
               </div>
      </div>
    </header>
  )
}