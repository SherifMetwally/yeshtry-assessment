import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

export default function Cart(props) {
    console.log("rpror" , props)
    let cartClasses
    if(props.cartOpen === false) {
         cartClasses = "cart hideCart"
    }
    else {
         cartClasses = "cart"
    }
  return (
    <div className={cartClasses}>
      <img className="close-icon pointer" onClick={props.toggleCart} src="../images/remove.png" alt="" />
      <h3 className="purple">My Cart</h3>
      <h4 className="cart-summary-title "> Cart Summary</h4>
      <div className="cart-summary">
        {console.log(props.products)}
        {props.products.map((product) => {
          return (
            <CartProduct
              removeItem={props.removeItem}
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
      <h2>
        {props.products.length === 0
          ? "Your  Cart Is Empty "
          : props.products
              .reduce(function (acc, obj) {
                return obj.quantity * (acc + obj.currentPrice);
              }, 0)
              .toLocaleString() + " L.E"}
      </h2>
      {props.products.length === 0 ? "" : (
        <div className="cart-buttons">
          <button className="cart-review-btn pointer">Review Cart</button>
          <button className="cart-complete-btn pointer">Complete Checkout</button>
        </div>
      )}
    </div>
  );
}
