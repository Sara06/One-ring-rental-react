import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer id="footer">
    <div id="footer-top" className="container">
      <div className="row">
        <div className="block col-sm-3">
          <Link to="#"
            ><img
            alt="One Ring Rentals"
            src={logo}
            width="200"
            height="100"
            
          /></Link>
          <br /><br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
            volutpat quam dignissim, convallis elit id, efficitur sem.
            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
            pellentesque nec at metus.
          </p>
        </div>
        <div className="block col-sm-3">
          <h3>Helpful Links</h3>
          <ul className="footer-links">
            <li><Link to="#">All rentals</Link></li>
            <li><Link to="#">List your rental</Link></li>
            <li><Link to="#">Read our FAQs</Link></li>
          </ul>
        </div>
        <div className="block col-sm-6">
          <h3>Popular regions</h3>
          <div className="row">
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Rhovanion</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Eriador</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p>
                    <a href="properties-detail.html">Bay of Belfalas</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Mordor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Arnor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Forlindon</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            &copy; 2014 One Ring Rentals

          
            <ul className="social-networks">
              <li>
                <Link to="#"><i className="fa fa-facebook"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-twitter"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-google"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-pinterest"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-youtube"></i></Link>
              </li>
              <li>
                <Link to="#"><i className="fa fa-rss"></i></Link>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
   
  </footer>
 
  );
}

export default Footer;