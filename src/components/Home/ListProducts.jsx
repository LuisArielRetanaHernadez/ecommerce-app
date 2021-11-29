// react-hooks
import { useContext } from 'react' 

// context
import ProductsContext from '../../contexts/ProductsContext'

// estilos del propio custom ListProducs
import '../../styles/Home/ListProduct.style.css'
import ItemProduct from './ItemProduct'

const ListProducts = () => {

    const {state} = useContext(ProductsContext)

    return (
        <div className='container-list-product'>
            { state.products && state.products.map(product => <ItemProduct
            key={product.id}
            id={product.id}
            model={product.model} 
            img={product.imgPrimary} 
            price={product.price} 
            description={product.textDesciption.text} 
            product={product}
            />) }
        </div>
    )
}

export default ListProducts