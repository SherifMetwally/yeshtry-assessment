import "./ProductCard.css";

export default function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-card-image"
        alt="card1"
        src="../images/card1.png"
      />
      <p className="product-card-title">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      </p>
      <div className="product-card-details">
        <div>
          <p className="purple bold product-card-price">9,999 LE</p>
          <div className="product-old-price-data"><p className="bold">9,999 LE</p> <div className="product-card-discount"> 30% </div></div>
          
        </div>
        <img
          className="product-card-logo"
          alt="card1"
          src="../images/adidas.svg"
        />
       
      </div>
      <div className="product-card-rating">
            <div className="rating-card-stars">
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/filled-star.svg" alt="rating" />
              <img src="../images/empty-star.svg" alt="rating" />
            </div>
            <p className="rating-value">4.9 of 5</p>
           
          </div>
           <label className="product-card-location"> Pickup From: Genena Mall</label> 
    </div>
  );
}
