import './ProductCards.css'
import ProductCard from '../ProductCard/ProductCard'
export default function ProductCards() {
    return (
        <div className="container similar-products">
            
        <h2 className="purple"> Similar Products </h2>
        <p className="similar-paragraph">You may like these products also</p>
        <div className='products-cards-container'>
        < ProductCard/>
        < ProductCard/>
        < ProductCard/>
        < ProductCard/>

        </div>
        </div>
    )
}