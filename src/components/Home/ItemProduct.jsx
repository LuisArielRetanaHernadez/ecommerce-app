// react-hooks
import { useContext } from 'react';

// context
import CardContext from '../../contexts/CardContext';

// react-router-dom
import { Link } from 'react-router-dom';

// estilos del propio componente ItemProduct
import '../../styles/Home/ItemProduct.style.css'

const ItemProduct = ({mark, model, id, description, img, price, }) => {

    const {dispatch} = useContext(CardContext)

    
    return (
        <Link to={`/product/${model}/${id}`} className='container-item-product'>
            <div className='img-product'>
                <img src={img} alt='imagen' />
            </div>
            <div className='information-product'>
                <div className='information-basic'>

                    <p>${price} MNX</p>

                    <div className='container-btn-to-buy'>
                        <button className='btn-to-buy' onClick={() => dispatch()} > Agregar Cart</button>
                    </div>

                </div>
                <h3>MacBook Ari 2</h3>
                <p className='mt-1'>
                Aliquam erat volutpat. Aliquam erat volutpat. Phasellus egestas ipsum ac risus aliquet, sagittis molestie purus dignissim. Nam commodo, augue vel ullamcorper tristique, tellus neque volutpat leo, nec sodales enim purus sit amet sem. Proin suscipit nibh vel massa aliquet placerat. Sed euismod eros sit amet elit varius ullamcorper. Suspendisse ornare dolor sit amet sem ultricies fermentum nec non ex. Phasellus hendrerit eros metus, quis mollis ex vulputate in.
                </p>
            </div>
        </Link>
    )
}
export default ItemProduct