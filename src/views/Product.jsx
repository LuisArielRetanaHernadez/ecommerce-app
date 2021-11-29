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
    const [productInformation, setProductInformation] = useState({})

    const dataProduct = useParams()
    const {state} = useContext(ProductsContext)
    console.log(state)

    useEffect(()=> {
        if(Object.keys(dataProduct).length >= 1 && state.products.length >= 1){
            setProductInformation(...state.products.filter(itemProduct => itemProduct.id === parseInt(dataProduct.id)))
            console.log()
        }
    },[dataProduct, state.products])

    console.log('id', productInformation)

    return (
    
        <div className='container-product'>
            <div className='container-img-product'>
                <img className='img-product-information' src={productInformation?.imgPrimary} alt={`imagen de la computadora ${productInformation?.model}`} />
            </div>
            <div className='information-about-product'>
                {Object.keys(productInformation).length >= 1  && <InformationProduct product={productInformation} /> }
            </div>
            
        </div>

    )
}
export default Product