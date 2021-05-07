import { CART_CONTENT} from "./store"

const localStorage = window.localStorage

export default function addToCart(item) {

    const check = checkIfItemIsInCart(item)
    
    let cartContent = []
    cartContent = JSON.parse(localStorage.getItem(CART_CONTENT)) || []

    if(check) {
        console.log(cartContent[check[0]].quantity)
        let quantityForUpdate = parseInt(cartContent[check[0]].quantity) + parseInt(item.quantity)
        cartContent[check[0]].quantity = quantityForUpdate  
        console.log(cartContent[check[0]].quantity)
    }

    if(!check) {
        cartContent.push(item)
    }

    localStorage.setItem(CART_CONTENT, JSON.stringify(cartContent))

}

export const getAllCart = () => {
    const cartContent = localStorage.getItem(CART_CONTENT)
    return cartContent
}

export const checkIfItemIsInCart = (item) => {
    let cartContent = JSON.parse(localStorage.getItem(CART_CONTENT))

    console.log("cartContent")
    console.log(cartContent)

    for(let cartItem in cartContent) {
        if(cartContent[cartItem].title === item.title) {
            return [cartItem, cartContent[cartItem].quantity] 
        }
    }
    return null
} 

export const removeToCart = (item) => {
    let cartContent = JSON.parse(localStorage.getItem(CART_CONTENT))

    let index = 0

    for(let cartItem in cartContent) {
        if(cartContent[cartItem].title === item.title) {
            index = cartItem
        }
    }
    cartContent.splice(index, 1)
    localStorage.setItem(CART_CONTENT, JSON.stringify(cartContent))
}

export const getNumberOfItem = () => {
    const cartContent = JSON.parse(localStorage.getItem(CART_CONTENT))
    
    let total = parseInt(0)
    for(let item in cartContent) {
        total += parseInt(cartContent[item].quantity)

    }

    return total
}
