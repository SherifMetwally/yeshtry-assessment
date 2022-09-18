import "./Header.css";

export default function Header(props) {

  return (
    <section className="container header--container">
      <div className="header--search-bar">
        
        <img
          className="header--search-icon"
          src="../images/search.svg"
          alt=""
        />
        <input className="header--search" type="text" placeholder="Search" />
      </div>
      <div className="header--store pointer">
        <img src="../images/adidas.svg" alt="" />
      </div>
      <div className="navbar-links">
        <div className="navbar-cart pointer" onClick={props.toggleCart}>
          <div className="cart-count"> {props.items.reduce(function (acc, obj) { return  acc + obj.quantity }, 0)} </div>
        <img className="navbar--icon" src="../images/cart.svg" alt="" />
        <span className="header--links">Cart</span>
        </div>
        <img
          className="navbar--icon pointer "
          src="../images/wishlist.svg"
          alt=""
        />
        <span className="header--links pointer">Wish List</span>
        <img className="navbar--icon pointer" src="../images/login.svg" alt="" />
        <span className="header--links pointer">Login</span>
      </div>
    </section>
  );
}
