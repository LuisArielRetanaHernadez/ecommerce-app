

// react-hooks
import { useContext } from "react"

// context
import CardContext from "../contexts/CardContext"

const Card = () => {

    const {state} = useContext(CardContext)

    console.log(state)

    return (
    
        <div>
            Carrito
        </div>

    )
}

export default Card