// react-hooks
import { createContext, useReducer } from "react";

const CardContext = createContext();

const initialCard ={ 
    car: [],
    total: 0,
    user: null
}

const card = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.total + action.payload.price,
            }
        case 'INCREASE_PRODUCT':
            return {
                ...state,
                cart: state.cart.map(product => product.id === action.payload.id ? product.tokens: action.payload.tokens),
                total: state.total + action.payload.total,
            }
        case 'DECREAEE_PRODUCT':
            return {
                ...state,
                total: state.total - action.payload.total,
            }
        case "REMOVE_PRODUCT":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload.id),
                total: state.total - action.payload.price,
            }
        case "REMOVE_ALL_PRODUCT":
            return {
                car: [],
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