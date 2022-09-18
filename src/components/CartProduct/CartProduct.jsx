import './CartProduct.css'

export default function CartProduct(props) {
    console.log(props)
    return (
        <div className='cart-product'>
            <img src='../images/product/main.jpg' alt='.'/>
            <div className='cart-product-details'>
            <p>{props.product.title}</p>
            <h6>Quantity :{props.product.quantity}</h6>
            <div className='product-cart-summary'>
            <h2 className="cart-product-price ">{props.product.currentPrice.toLocaleString()} <span> LE </span></h2>
            <button className='remove-btn pointer' onClick={()=>props.removeItem(props.product)}> Remove </button>
            </div>
            </div>
        </div>
    )
}