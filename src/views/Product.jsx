// react-hooks
import { useState, useContext, useEffect } from 'react'

// react-router-dom
import { useParams } from 'react-router-dom'

// context
import ProductsContext from './../contexts/ProductsContext';

// estilos de la vista Product
import '../styles/views/Product.style.css'
import InformationProduct from '../components/Product/InformationProduct';

const Product = () => {
    const [productInformation, setProductInformation] = useState([])

    const dataProduct = useParams()

    const {state} = useContext(ProductsContext)

    useEffect(()=> {
        setProductInformation(state.filter(product => product.id === dataProduct.id || product.model === dataProduct.model))
    },[dataProduct, state])

    console.log(productInformation)

    return (
    
        <div className='container-product'>
            <div className='container-img-product'>
                <img className='img-product-information' src={productInformation[0]?.imgPrimary} alt={`imagen de la computadora ${productInformation[0]?.model}`} />
            </div>
            <div className='information-about-product'>
                <InformationProduct product={productInformation} />
            </div>
            
        </div>

    )
}
export default Product