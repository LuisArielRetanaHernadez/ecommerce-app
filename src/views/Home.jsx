// estilos de la vista Home
import '../styles/views/Home.style.css'

// custom del Home
import HeaderPrimary from '../components/Home/HeaderPrimary';
import ListProducts from '../components/Home/ListProducts';

const Home = () => {

    return (
    
        <div className="container-home">
            <HeaderPrimary />
            <ListProducts />
        </div>

    )
}

export default Home;