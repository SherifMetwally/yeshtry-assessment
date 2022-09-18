import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bottom">
      <div className="footer">
        <div className="container footer-container">
          <div className="footer-about">
            <img src="../images/logo-yello.svg" alt="logo-yellow" />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. <br /> <br /> Duis autem vel eum iriure dolor in
              hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
              <br /> Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit
            </p>
          </div>
          <div className="footer-main-links">
            <h4>Subscribe to our newsletter</h4>
            <div className="footer-subscribe">
              <input className="footer-subscribe-input"></input>
              <div className="footer--subscribe-text"> Subscribe </div>
            </div>
            <div className="footer-links">
              <div>
                <h3>About Us</h3>
                <h3>Contact Us</h3>
                <h3>Track Order</h3>
                <h3>Terms & Conditions</h3>
                <h3>Privacy Policy</h3>
                <h3>Sell With Us</h3>
                <h3>Shipping And Returns</h3>
              </div>
              <div className="footer-social-media">
                <div>
                  <img src="../images/social-media/fb.svg" alt="facebook" />
                  /YESHTERY
                </div>
                <div>
                  <img
                    src="../images/social-media/linkedin.svg"
                    alt="linkedin"
                  />
                  /YESHTERY
                </div>
                <div>
                  <img src="../images/social-media/ig.svg" alt="instagram" />
                  /YESHTERY
                </div>
                <div>
                  <img src="../images/social-media/twitter.svg" alt="twitter" />
                  /YESHTERY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bottom-footer">
        <div className="footer-copyrights">
        <p>© 2021 yeshtery, all rights reserved.</p>
        </div>
        <div className="footer-payment">
        <img src="../images/payment/cod.png" alt="cash on delivery" />
        <img src="../images/payment/visa.png" alt="visa" />
        <img src="../images/payment/mastercard.png" alt="mastercard" /> 
        </div>
        <div className="footer-powered-by">
        <label>Powered By  </label> <img src="../images/powered-by.png" alt="mastercard" /> 
        </div>
      </div>
    </footer>
  );
}
