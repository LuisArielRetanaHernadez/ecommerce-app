// react-hooks
import { useContext } from "react"

// context
import ProductsContext from '../../contexts/ProductsContext';

// estilos del componente HeaderPrimary
import "../../styles/Home/HeaderPrimary.style.css"
import { Link } from "react-router-dom";

const HeaderPrimary = () => {

    const {state} = useContext(ProductsContext)
    const product = state.products[0]
    return (
    
        <header className="header-primary">
          <div className='container-slider'>
            <div className='slider'>
              <div className='element-slider'>
                <img className='img-slider' src={product?.imgs[2]} alt={`imagen de la computadora ${product.model} `}/>
                <div className='information-element'> 
                  <h2> {product?.model} </h2>
                  <div className='description-element'>
                    {/* <p> {state[0].textDesciption.text} </p> */}
                    <p>
                    Phasellus sit amet sapien est. Praesent purus urna, suscipit non felis ut, dictum viverra tellus. Praesent pulvinar tincidunt dolor. Nunc non dignissim sapien. Curabitur at turpis quis dui aliquam elementum nec et nisl. Morbi viverra lorem sit amet arcu consectetur tincidunt. Donec non massa quis nibh dignissim pharetra. Fusce volutpat tempor orci. Etiam aliquet felis nunc, nec congue lectus tristique non. Mauris vitae nibh et dui condimentum consequat in vel velit
                    </p>
                  </div>
                </div>

                <div className='more-information-link'> 
                    <h2 className='text-center' > {product?.model} <hr className='border-2' /> </h2>
                    <Link className='link-information-product' to={`/product/${product?.model}/${product?.id}`}>Ir a Producto</Link>
                </div>

              </div>
            </div>
          </div>
        </header>

    )
}
export default HeaderPrimary;