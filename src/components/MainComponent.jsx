export default function MainComponent(){
  return(
    <main id="main">
                <section id="section1">

            <div className="slide-container">
                <div className="slide-view">
                    <ul className="slide-wrap">
                        <li className="slide slide3"></li>
                        <li className="slide slide1"></li>
                        <li className="slide slide2"></li>
                        <li className="slide slide3"></li>
                        <li className="slide slide1"></li>
                    </ul>
                </div>

                {/* 페이지 버튼(인디케이터 버튼) : 투명버튼 */}
                <span className="page-btn-box">
                    <a href="!#" className="page-btn on">페이지1</a>
                    <a href="!#" className="page-btn">페이지2</a>
                    <a href="!#" className="page-btn">페이지3</a>
                </span>

            </div>





            {/* 가상요소 비포 Before  <div></div> 인라인요소가 생성된다. */}
            <ul>
                <li>
                    <img src="./img/wedding-img4.png.webp" alt=""/>
                </li>
                <li>
                    <hr/>
                </li>
                <li>
                    <h3>WE ARE GETTING MARRIED</h3>
                    <h2>SEPTEMBER 20TH, 2015</h2>
                </li>
            </ul>
            {/* <!-- 가상요소 에프터 After  <div></div> 인라인요소가 생성된다. --> */}
                </section>
                
                <section id="section2">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>THE COUPLE</h2>
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="img-box">
                                <img src="./img/wedding-img5.jpg.webp" alt=""/>
                                
                                <span>
                                    <a href="!#"><i className="fa fa-facebook-f"></i></a>
                                    <a href="!#"><i className="fa fa-twitter"></i></a>
                                    <a href="!#"><i className="fa fa-dribbble"></i></a>
                                    <a href="!#"><i className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                            <div className="txt-box">
                                <h3>WE ARE SHAPED AND FASHIONED BY WHAT WE LOVE.</h3>
                                <h4>I AM LAILA</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="img-box">
                                <img src="./img/wedding-img6.jpg.webp" alt=""/>
                                <span>
                                    <a href="!#"><i className="fa fa-facebook-f"></i></a>
                                    <a href="!#"><i className="fa fa-twitter"></i></a>
                                    <a href="!#"><i className="fa fa-dribbble"></i></a>
                                    <a href="!#"><i className="fa fa-linkedin"></i></a>
                                </span>
                            </div>
                            <div className="txt-box">
                                <h3>THE ART OF LOVE IS LARGELY THE ART OF PERSISTENCE.</h3>
                                <h4>I AM LAILA</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
        
                <section id="section3">
            {/* <!-- 가상요소 --> */}
            <div className="container">
                <div className="gap">
                    {/* <!-- 비포 가상요소 before --> */}
                    <div className="title">
                        <h2>EAGERLY WAITING FOR OUR WEDDING DATE</h2>
                    </div>                    
                    
                </div>
            </div>
                </section>
        
                <section id="section4">
            <div className="container">
                <dib className="gap">
                    <div className="title">
                        <h2>EVENT & PARTIES</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="col-gap">
                                    <div className="col-box">
                                        <span><i className="icon-wine"></i></span>
                                        <h3>COCKTAIL PARTY</h3>
                                        <hr/>
                                        <h4>SEPTEMBER 19TH, 2015</h4>
                                        <h5>11:00 PM – 01:00 PM</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="col-box">
                                        <span><i className="icon-heart"></i></span>
                                        <h3>WEDDING CEREMONY</h3>
                                        <hr/>
                                        <h4>SEPTEMBER 19TH, 2015</h4>
                                        <h5>12:00 PM – 16:00 PM</h5>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">
                                    <div className="col-box">
                                        <span><i className="icon-gift"></i></span>
                                        <h3>WEDDING PARTY</h3>
                                        <hr/>
                                        <h4>SEPTEMBER 19TH, 2015</h4>
                                        <h5>18:00 PM – 07:00 AM</h5>
                                    </div>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </dib>
            </div>
                </section>
        
                <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>PHOTO GALLERY</h2>
                    </div>
                    <div className="content">
                        {/* <!-- ul>li*8>div.col-gap>img[src=./img/wedding-img$@8.jpg] --> */}
                        <ul>
                            <li>
                                <figure className="col-gap"><img data-num="8" className="img-btn" src="img/wedding-img08.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="9" className="img-btn" src="img/wedding-img09.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="10" className="img-btn" src="img/wedding-img10.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="11" className="img-btn" src="img/wedding-img11.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="12" className="img-btn" src="img/wedding-img12.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="13" className="img-btn" src="img/wedding-img13.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="14" className="img-btn" src="img/wedding-img14.jpg" alt=""/></figure>
                            </li>
                            <li>
                                <figure className="col-gap"><img data-num="15" className="img-btn" src="img/wedding-img15.jpg" alt=""/></figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                </section>
        
                <section id="section6">
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        <h2>섹션6</h2>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="col-gap">
                                <div className="col-box">
                                    <h2>
                                        BE PRESENT AT THE WEDDING TO GIVE YOUR BLESSINGS & LOVE.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="col-gap">
                                <div className="col-box">
                                    <form name="attending_form" method="post" action="./attending.php">
                                    <ul className="attending">
                                        <li>
                                            <h2>ARE YOU ATTENDING?</h2>
                                        </li>
                                        <li>
                                            <div>
                                                <input type="text" name="user_name" id="userName" placeholder="YOUR NAME"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <input type="text" name="user_email" id="userEmail" placeholder="YOUR EMAIL"/>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="left">
                                                <select name="number" id="number">
                                                    <option value="" selected>NUMBER OF GUESTS</option>
                                                    <option value="01">01</option>
                                                    <option value="02">02</option>
                                                    <option value="03">03</option>
                                                    <option value="04">04</option>
                                                    <option value="05">05</option>
                                                </select>
                                            </div>
                                            <div className="right">
                                                <select name="events" id="events">
                                                    <option value="" selected>ALL EVENTS</option>
                                                    <option value="Cocktail Party">Cocktail Party</option>
                                                    <option value="Wedding Ceremony">Wedding Ceremony</option>                                                    
                                                    <option value="Wedding Party">Wedding Party</option>                                                    
                                                </select>
                                            </div>
                                        </li>
                                        <li>
                                            <button className="submit-btn" type="submit">Send Message</button>
                                        </li>
                                        
                                        <li>
                                            <p className="attending">Your message was sent successfully. Thanks.</p>
                                        </li>
                                    </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>GIFT REGISTRY</h2>
                    </div>
                    <div className="content">
                        <div className="row1">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="row2">
                            <ul>
                                <li><a href="!#"><img src="./img/wedding-img18.jpg" alt=""/></a></li>
                                <li><a href="!#"><img src="./img/wedding-img19.jpg" alt=""/></a></li>
                                <li><a href="!#"><img src="./img/wedding-img20.jpg" alt=""/></a></li>
                                <li><a href="!#"><img src="./img/wedding-img21.jpg" alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                </section>
                <section id="section8">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>OUR STORY</h2>
                    </div>
                    <div className="content">
                        <div className="slide-continer">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <div className="col-gap">                                        
                                            <figure>
                                                <div className="img-box">
                                                    
                                                    <img src="./img/wedding-img08.jpg" alt=""/>
                                                    <h4>30 March 2016</h4>
                                                    
                                                </div>                                    
                                                <figcaption>
                                                    <h2>01</h2>
                                                    <div>
                                                        <h3>Our First Dating</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                        <i></i>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="slide slide2">
                                        <div className="col-gap">                                        
                                            <figure>
                                                <div className="img-box">
                                                    <img src="./img/wedding-img09.jpg" alt=""/>
                                                    <h4>30 March 2016</h4>
                                                </div>                                    
                                                <figcaption>
                                                    <h2>02</h2>
                                                    <div>
                                                        <h3>Our First Dating</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                        <i></i>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="slide slide3">
                                        <div className="col-gap">                                        
                                            <figure>
                                                <div className="img-box">
                                                    <img src="./img/wedding-img10.jpg" alt=""/>
                                                    <h4>30 March 2016</h4>
                                                </div>                                    
                                                <figcaption>
                                                    <h2>03</h2>
                                                    <div>
                                                        <h3>Our First Dating</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                        <i></i>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="slide slide4">
                                        <div className="col-gap">                                        
                                            <figure>
                                                <div className="img-box">
                                                    <img src="./img/wedding-img11.jpg" alt=""/>
                                                    <h4>30 March 2016</h4>
                                                </div>                                    
                                                <figcaption>
                                                    <h2>04</h2>
                                                    <div>
                                                        <h3>Our First Dating</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                        <i></i>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                    <li className="slide slide5">
                                        <div className="col-gap">                                        
                                            <figure>
                                                <div className="img-box">
                                                    <img src="./img/wedding-img12.jpg" alt=""/>
                                                    <h4>30 March 2016</h4>
                                                </div>                                    
                                                <figcaption>
                                                    <h2>05</h2>
                                                    <div>
                                                        <h3>Our First Dating</h3>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>
                                                        <i></i>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
                </section>
                
                <section id="section9">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>RECENT BLOG</h2>
                    </div>
                    <div className="content">
                        <ul>
                            <li>
                                <div className="col-gap">                                    
                                    <figure>
                                        <img src="./img/wedding-img22.jpg.webp" alt=""/>
                                        <figcaption>
                                            <a href="!#">WEDDING</a>
                                            <h3><a href="!#">WEDDINGS ARE IMPORTANT BECAUSE THEY CELEBRATE LIFE AND POSSIBILITY.</a></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p>
                                            <hr/>
                                            <h6><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></h6>
                                        </figcaption>
                                    </figure>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">                                    
                                    <figure>
                                        <img src="./img/wedding-img23.jpg.webp" alt=""/>
                                        <figcaption>
                                            <a href="!#">WEDDING</a>
                                            <h3><a href="!#">WEDDINGS ARE IMPORTANT BECAUSE THEY CELEBRATE LIFE AND POSSIBILITY.</a></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p>
                                            <hr/>
                                            <h6><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></h6>
                                        </figcaption>
                                    </figure>
                                </div>
                            </li>
                            <li>
                                <div className="col-gap">                                    
                                    <figure>
                                        <img src="./img/wedding-img24.jpg.webp" alt=""/>
                                        <figcaption>
                                            <a href="!#">WEDDING</a>
                                            <h3><a href="!#">WEDDINGS ARE IMPORTANT BECAUSE THEY CELEBRATE LIFE AND POSSIBILITY.</a></h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is...</p>
                                            <hr/>
                                            <h6><a href="!#">JUNE 30, 2016</a> / POSTED BY <a href="!#">HARESH</a></h6>
                                        </figcaption>
                                    </figure>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                </section>
        
                <section id="section10">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>LOCATION</h2>
                    </div>
                    <div className="content">
                        <p>                            
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
                        </p>                        
                    </div>
                </div>
            </div>
                </section>
                <section id="section11">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.349869950179!2d127.02936911558709!3d37.4996655357122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1aedd6f3421%3A0x48fe3057525682b!2z66mU6rCA7Iqk7YSw65SUSVTslYTsubTrjbDrr7gg6rCV64Ko7Lqg7Y287IqkIOyehe2VmeyymA!5e0!3m2!1sko!2skr!4v1676637665596!5m2!1sko!2skr"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
               
            </main>
  )
}