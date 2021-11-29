// react-hooks
import { useState } from 'react';

// context
import CardContext from '../../contexts/CardContext';

// estilos del componente ItemProductCart
import '../../styles/Card/ItemProductsCart.style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ItemProductCart = ({img, model, tokens, price, amounToBuy, id, product}) => {

    const [token, setToken] = useState(amounToBuy);

    const {state, dispatch} = useContext(CardContext)

    const increaseAmountProduct = () => {
        setToken(prevent => prevent < tokens ? prevent + 1 : prevent ) 
        if(token < tokens) {
            product.amounToBuy += 1
            dispatch({type: 'INCREASE_PRODUCT', payload: {total: price, product: product, id: id}})
        } 
    console.log('incremenatar', state)    
    }

    const decreaseAmountProduct = () => {
        setToken(prevent => prevent > 1 ? prevent - 1 : prevent ) 
        if(token > 1 ) {
            console.log('drementar')
            product.amounToBuy -= 1
            dispatch({type: 'DECREAEE_PRODUCT', payload: {total: price, product: product, id: id}})
        }
        console.log('decrementar', state)    
    }
    console.log('contador: ', token)
    return (
        <div className='container-item-product-cart bg-white_neon'>
            <div className='container-img-cart'>
                <img src={img} alt='img' />
            </div>
            <div className='container-information-more-product'>
                <h2 className='title-model-product text-2xl'> {model} </h2>
                <div className='specs'>
                    <ul>
                        <li>ram 8 GB</li>
                        <li>procesador Chip M1 de Apple con CPU de 8 núcleos</li>
                        <li>GPU de 7 núcleos y Neural Engine de 16 núcleos</li>
                        <li>almacenamiento 580 GB</li>
                    </ul>
                </div>
                <div className='container-about-product'>
                    <p>provedor: apple</p>
                    <p>$ {price.toLocaleString('es-MX')} MNX</p>
                </div>
                <div className='container-amount-product'>
                    <button onClick={() => increaseAmountProduct() }><span>+</span></button> <button onClick={() => decreaseAmountProduct() }><span>-</span></button> <br />
                    <p className='ml-3'>{token}</p>
                </div>
                <div className='container-btns-products-cart'>
                    <Link className='link-product' to={`/product/${model}/${id}`} >Ver</Link>
                    <button className='delet-product' onClick={() => dispatch({type: 'REMOVE_PRODUCT', payload: {price: price * token, id: id, amounToBuy: product.amounToBuy}})}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default ItemProductCart