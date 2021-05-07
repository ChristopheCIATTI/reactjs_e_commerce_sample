import { Link } from "react-router-dom"
import { refresh } from "../service/ApiService"
import { getAllCart, removeToCart } from "../service/CartService"

export default function Cart(props) {
    
    const wholeCart = getAllCart()
    const cartItems = JSON.parse(wholeCart)
    
    const handleOnDelete = (item) => {
        removeToCart(item)
        refresh()
    }

    function CartDisplay() {
        let cartItem = []
   
        for(let item in cartItems) {
            cartItem.push(<li>{cartItems[item].title} {cartItems[item].quantity} {cartItems[item].price * cartItems[item].quantity} <button onClick={() => {handleOnDelete(cartItems[item])}}>Supprimer</button></li>)
        }   
        return cartItem       
    }

    function CartInfo() {
        let totalPrice = 0
        
        for(let item in cartItems) {
            totalPrice += (parseInt(cartItems[item].quantity) * cartItems[item].price)  
        }

        return (
            <div>
                <h3>Prix total</h3>
                <p>{totalPrice}</p>
            </div>
        )
    }

    function CartButton() {
        return(
            <div>
                <Link to="/"><button type="button" className="text-dark btn btn-outline-light">Continuer mes achats</button></Link>
                <Link to="/deliveryCoords"><button type="button" className="btn btn-outline-warning">Valider mon panier</button></Link>
            </div>
        )
    }

    return (
        <section>
            <h1>Panier!</h1>
            <CartDisplay/>
            <CartButton/>
            <CartInfo/>
        </section>
    )
}
