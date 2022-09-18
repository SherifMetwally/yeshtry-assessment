import { useState } from "react";
import "./Product.css";
import data from "../../services/data";
import { useEffect } from "react";

export default function Product(props) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct({ ...data[0], quantity: 1 })
  }, [])

  function handleChange(event) {
    setProduct((prevFormData) => {

      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const increaseQuantity = () => {
    const updatedProduct = { ...product, quantity: product.quantity + 1 }
   console.log(updatedProduct)
    setProduct(updatedProduct);

  }

  function decreaseQuantity(event) {
    if(product.quantity === 0 ) {
      return 0
    }
    
    setProduct((prevFormData) => {
      return {
        ...prevFormData,
        quantity :product.quantity--,
      };
    });
    
 
  }

  if (!product) {
    return <div>...</div>
  }


  return (
    <section>
      <div className="container product-path">
        <h3>
          <span className="underlined"> Men</span> /
          <span className="underlined"> Clothing</span> /
          <span className="underlined"> Tops</span> /
          <span className="underlined"> Adidas</span> / Adidas Black T-Shirt
        </h3>
      </div>
      <hr />
      <div className="product--container">
        <div className="product--component">
          <img
            className="product-image"
            src={`${product.imageUrl}`}
            alt="main"
          />
          <div className="product--corausal">
            <span className="product--arrows">
              <img className="" src="../images/lt.png" alt="alt-1" />
            </span>
            <div className="product-chrousal-images">
              <img
                className="product--thumbnail"
                src="../images/product/1.png"
                alt="alt-1"
              />
              <img
                className="product--thumbnail"
                src="../images/product/2.png"
                alt="alt-2"
              />
              <img
                className="product--thumbnail"
                src="../images/product/3.png"
                alt="alt-3"
              />
              <img
                className="product--thumbnail"
                src="../images/product/4.png"
                alt="alt-4"
              />
            </div>
            <span className="product--arrows">
              <img className="" src="../images/gt.png" alt="alt-1" />
            </span>
          </div>
        </div>
        <div className="product-details">
          <img
            src="../images/adidas.svg"
            className="product--logo"
            alt="product-brand"
          />
          <p className="product-description">
          {product.title}
          </p>
          <h5 className="product-category">Men</h5>
          <div className="product-rating">
            <div className="rating-stars">
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/empty-star.svg" alt="rating" />
            </div>
            <p className="rating-value">{product.rating}</p>
            <p className="rating-users">{product.noOfRatings}</p>
          </div>
          <div className="product-price-details">
            <h2 className="product-price">
            {(product.currentPrice.toLocaleString())} <span> LE </span>
            </h2>

            <h3 className="product-oldprice">
            {product.oldPrice.toLocaleString()} <span> LE </span>
            </h3>
            <div className="price-discount">
              <h4>{Math.round(100 * (product.oldPrice - product.currentPrice) / product.oldPrice) }% Off</h4>
            </div>
          </div>
          <hr />
          <h3 className="product-options-titles">Size</h3>
          <div className="product-options">
            <div className="product-size-option">Small</div>
            <div className="product-size-option">Medium</div>
            <div className="product-size-option product-size-selected ">
              Large
            </div>
            <div className="product-size-option">X Large</div>
            <div className="product-size-option">XX Large</div>
          </div>
          <h3 className="product-options-titles">Color</h3>
          <div className="product-options">
            <img
              className="product-color product-color-selected"
              src="../images/color1.png"
              alt="rating"
            />
            <img
              className="product-color"
              src="../images/color2.png"
              alt="rating"
            />
          </div>
          <hr />
          <h3 className="product-options-titles">Quantity</h3>
          <div className="product-quantity">
            
            <div className="product-decrease" name="quantity"   onClick={decreaseQuantity}> - </div>
            <div>
              
              <input
                className="product-input"
                onChange={handleChange}
                name="quantity"
                value={product.quantity}
                type='number'
              ></input>
            </div>
            <div className="product-increase" name="quantity" onClick={increaseQuantity}> + </div>
          </div>
          <div className="product-btns">
            <button className="product-add-button" onClick={() => props.addToCart(product)}>Add To Cart</button>
            <button className="product-pickup-button">Pickup From Store</button>
          </div>
        </div>
      </div>
    </section>
  );
}
