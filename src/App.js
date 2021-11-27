import './App.css';

// react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// provider of context
import { ProductsProvider } from './contexts/ProductsContext';

// Layout
import MenuPrimary from './layout/MenuPrimary';

// views
import Home from './views/Home';
import Card from './views/Card';
import ProfileUser from './views/ProfileUser';
import Product from './views/Product';
import { CardProvider } from './contexts/CardContext';

function App() {
  return (
    <div className="App">
    
    <ProductsProvider> 
      <CardProvider>
        <Router>
          <MenuPrimary> 
            <Routes> 
              <Route exact path='/' index element={<Home />} /> 
              <Route exact path='/card' element={<Card />} />
              <Route exact path='/profile/:name' element={<ProfileUser />} />
              <Route exact path='/product/:model/:id' element={<Product />} />
            </Routes>
          </MenuPrimary>
        </Router>
      </CardProvider>
    </ProductsProvider>

    </div>
  );
}

export default App;
