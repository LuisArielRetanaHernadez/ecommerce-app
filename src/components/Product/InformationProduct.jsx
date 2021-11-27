// estilos del componente InformationProduct
import '../../styles/Product/InformationProduct.style.css'

// estilos glables
import '../../styles/custom/estylesGlobal.css'

const InformationProduct = ({product}) => {

    return (
       <div className='container-infomation-product'>
         <div className='description-information' >
            <h2 className='title-model-product'>{product[0]?.model}</h2>
            <p>
               {/* {product[0]?.textDesciption.text}  */}
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non facilisis purus, sit amet efficitur lorem. Nullam aliquet, nisl vel bibendum consectetur, nibh tellus varius libero, in venenatis justo nulla nec arcu. Etiam laoreet gravida cursus. Integer fermentum ante in erat malesuada dapibus. Cras imperdiet nulla non arcu molestie, pulvinar vulputate velit posuere. Cras efficitur malesuada diam eu maximus. Aliquam pretium felis quam, in egestas quam tempus at. Proin gravida ipsum nec augue lobortis, non laoreet nunc malesuada.

Fusce finibus dui in arcu rutrum gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam enim dui, congue quis risus in, consequat tincidunt nibh. Pellentesque id lacinia lorem. Cras posuere arcu ac tortor hendrerit dapibus. Fusce ut nulla vel metus viverra dictum et in ipsum. Sed consequat tortor volutpat rutrum venenatis. Sed bibendum pretium massa, sit amet aliquet nisl malesuada eu. Nunc ut rhoncus turpis. Proin eget ligula non felis luctus vulputate.

In hac habitasse platea dictumst. Maecenas vitae sapien et turpis iaculis laoreet id quis sapien. Sed facilisis euismod erat sed dapibus. Aliquam leo metus, molestie vitae convallis sit amet, varius ac sapien. Praesent accumsan dolor sit amet luctus volutpat. Phasellus pellentesque ante vitae sapien posuere, sit amet porttitor sapien rhoncus. In vehicula porta elit a pretium.
            </p>
         </div>
         <div className='information-price-amount'>
            <hr className='line-seccion border-blue_secondary' />
            <ul className='list-price-amount'>
               <li>${product[0]?.price} MNX</li>
               <li className='w-1/4 p-1 box-border' ><button className='btn-to-buy'>Agregar Cart</button></li>
               <li> disponibles: {product[0]?.tokens}</li>
            </ul>
         </div> 
         <div className='specs-product'>
            <hr className='line-seccion border-blue_secondary' />
            <h3>Especificaciones de rendimiento</h3>
            <ul className='list-specs-product'>
               <li className='specs-ram bg-blue_primary'>
                 ram {product[0]?.specs[0].ram}
               </li>
               <li className='specs-storage bg-blue_primary'>
               almacenamiento {product[0]?.specs[0].storage}
               </li>
               <li className='specs-processor bg-blue_primary'>
                  procesador {product[0]?.specs[0].processor}
               </li>
               <li className='specs-gpu bg-blue_primary'>
                  gpu {product[0]?.specs[0].gpu}
               </li>
               <li className='specs-keyboard bg-blue_primary'>
                 teclado {product[0]?.specs[0].keyboard}
               </li>
            </ul>
         </div>
         <div className='specs-security'>
            <hr className='line-seccion border-blue_secondary' />
            <h3>Especificaciones de seguridad</h3>
            <ul className='list-specs-security'>
               <li className='security-face bg-blue_primary'>
                  {product[0]?.security[0].faceID ? 'con faceID' : 'sin faceID'}
               </li>
               <li className='security-touch bg-blue_primary  '>
                  {product[0]?.security[0].touchID ? 'con touchID' : 'sin touchID'}
               </li>
            </ul>
         </div> 
       </div> 
    )
}
export default InformationProduct;