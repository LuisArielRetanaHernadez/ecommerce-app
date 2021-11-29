// react-hooks
import { createContext, useReducer } from "react";

const CardContext = createContext();

const initialCard ={ 
    cart: [],
    total: 0,
    amountProduct: 0,
    user: null
}

const card = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                cart: [...state.cart, action.payload.product],
                total: state.total + action.payload.price,
                amountProduct: state.amountProduct + action.payload.product.amounToBuy,
            }
        case 'INCREASE_PRODUCT':
            return {
                ...state,
                cart: state.cart.map(product => product.id === action.payload.id ? action.payload.product: product ),
                total: state.total + action.payload.total,
                amountProduct: state.amountProduct + 1,
            }
        case 'DECREAEE_PRODUCT':
            return {
                ...state,
                cart: state.cart.map(product => product.id === action.payload.id ? action.payload.product: product  ),
                total: state.total - action.payload.total,
                amountProduct: state.amountProduct - 1,
            }
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
                total: state.total - action.payload.price,
                amountProduct: state.amountProduct - action.payload.amounToBuy,
            }
        case 'REMOVE_ALL_PRODUCT':
            return {
                ...state,
                cart: [],
                total: 0,
            }
        default:
            return state
    }
}

const CardProvider = ({children}) => {

    const [state, dispatch] = useReducer(card, initialCard)

    const data = {
        state,
        dispatch
    }

    return (
        <CardContext.Provider value={data}>{children}</CardContext.Provider>
    )
}

export default CardContext
export {CardProvider}