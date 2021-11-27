// react-router-dom
import { Link } from "react-router-dom"

// estilos del comoponente MenuPrimary
import '../styles/Layout/MenuPrimary.style.css'

const MenuPrimary = ({children}) => {

    return (
    <div  className='container-menu-primary'> 
        <div className='menu-primary'>
            <nav className='nav-menu'>
                <ul className='list-menu'>
                    <div className='element-link-primary-title p-2 box-border'>
                        <Link to='/' >MonsterPc</Link>
                    </div>
                    <div className='element-link-primary p-2 box-border'>
                        <Link to='/card' >card <span className='indexs-products'>2</span> </Link>
                        <Link to='/login' >Login</Link>
                    </div>
                </ul>
            </nav>
        </div>

        {children}

    </div>
    )
}

export default MenuPrimary