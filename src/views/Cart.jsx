// react-hooks
import { useContext } from "react"

// context
import CardContext from "../contexts/CardContext"
import ProductsContext from './../contexts/ProductsContext';

// componentes de la vista Cart
import ItemProductCart from "../components/Card/ItemProductsCart"

// estilos de la vista Cart
import '../styles/views/Cart.style.css'

const Cart = () => {

    const {state, dispatch} = useContext(CardContext)
    const {dispatch : products} = useContext(ProductsContext)

    console.log(state.cart)

    const toBuy = () => {
        if (state?.cart?.length > 0) {
            state.cart.forEach(product => {
                
                product.Tokens = product.tokens - product.amounToBuy
                const amounToBuy = product.amounToBuy
                product.tokens = product.tokens - amounToBuy
                delete product.amounToBuy

                console.log('amounToBoy', amounToBuy * product.price)
                products({type: 'DECREAEE_TOKEN_PRODUCT', payload: {product: product, id: product.id}})
            });
            dispatch({type: 'REMOVE_ALL_PRODUCT'})
        }
    }

    return (
    
        <div className='container-cart'>


 
            <div className='container-total-price'>
                <div className='total-price'>total: $ {state.total.toLocaleString('es-MX')} MNX </div>
                <div className='container-btn-to-buy-cart'><button className='btn-to-buy' onClick={() => toBuy()} >comprar</button></div>
            </div> 

            <div className='list-product-cart'>
                {state.cart.length > 0 && state.cart.map(product => <ItemProductCart 
                key={product?.id}
                id={product?.id}
                img={product?.imgPrimary}
                model={product?.model}
                tokens={product?.tokens}
                price={product?.price}
                amounToBuy={product?.amounToBuy}
                product={product}
                /> )}
            </div>

        </div>

    )
}

export default Cart