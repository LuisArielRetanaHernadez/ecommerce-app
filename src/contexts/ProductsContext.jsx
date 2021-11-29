// react-hooks
import { createContext, useReducer } from "react";

// api fake
import { products } from "../apiFake/Products";

// create context
const ProductsContext = createContext();

const initialState = {
    products: products
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'DECREAEE_TOKEN_PRODUCT':
            return {
                ...state,
                state: state.products.map(product => product === action.payload.id ? action.payload.product: state.products.product)
            }
        default:
            return state
    }
}

const ProductsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState )

    const data = {
        state,
        dispatch,
    }

    return (
        <ProductsContext.Provider value={data}>{children}</ProductsContext.Provider>
    )
}

export default ProductsContext
export {ProductsProvider}