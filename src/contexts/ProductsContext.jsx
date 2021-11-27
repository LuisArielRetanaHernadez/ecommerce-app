// react-hooks
import { createContext, useReducer } from "react";

// api fake
import { products } from "../apiFake/Products";

// create context
const ProductsContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const ProductsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, products )

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