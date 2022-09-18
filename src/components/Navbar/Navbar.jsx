import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--container container">
        <div className="center-flex">
        <img className="navbar--dashes pointer" src="../images/dashes.svg" alt="" />
        <img
          className="navbar--logo pointer"
          src="../images/logo.svg"
          alt="yeshtry logo"
        />
</div>
        <span className="notification-message pointer">
          <span className="navbar--than">&lt; </span> Valentine’s Day Offers!
          Buy Two Get One Free{" "}
          <b>
            {" "}
            <u>Shop Now</u>{" "}
          </b>
          <span className="navbar--than"> &gt;</span>
        </span>

        <div className="navbar-links">
          <div className="center-flex pointer">
            {" "}
            <img
              className="navbar--icon"
              src="../images/phone.svg"
              alt=""
            />{" "}
            <span className="span-links ">Contact Us</span>
          </div>
          <div className="center-flex pointer">
          <img className="navbar--icon" src="../images/track.svg" alt="" />{" "}
          <span className="span-links"> Track Order </span>
          </div>
          <div className="center-flex pointer">
          <img
            className="navbar--icon"
            src="../images/location.svg"
            alt=""
          />{" "}
         <span className="span-links">  Find A Store </span>
        </div>
        </div>
      </div>
    </nav>
  );
}
