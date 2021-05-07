import React, { useEffect, useState } from "react";
import { getFramesetById, refresh } from "../../service/ApiService";
import addToCart from "../../service/CartService";

export default function FramesetProduct({match, location, props, ...rest}) {
    
    let framesetModel = {
        id: 0,
        title: "title",
        description: "description",
        size: 0,
        color: "color",
        price: 0,
        quantity: 0
    }
    
    const [frameset, setFrameset] = useState(false)

    let framesetColor = {"color": "Black"}
    let framesetSize = {"size": 53}
    let quantity = {"quantity": 1}
    
    useEffect( async () => {
        const data = await getFramesetById(match.params.id)
        setFrameset(data)
    }, [])

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        
        if(name === "framesetColor") 
        {
            framesetColor.color = value
            console.log(framesetColor)
        }

        if(name === "famesetSize")
        {
            framesetSize.size = value
            console.log(framesetSize)
        }

        if(name === "famesetQunatity")
        {
            quantity.quantity = value
        }
    }

    const handleAddToCart = (frameset) => {
        console.log(framesetColor)
        console.log(framesetSize)
        
        framesetModel.id = frameset.id
        framesetModel.title = frameset.title
        framesetModel.description = frameset.description
        framesetModel.size = framesetSize.size
        framesetModel.color = framesetColor.color
        framesetModel.price = frameset.price
        framesetModel.quantity = quantity.quantity

        addToCart(framesetModel)
        refresh()
    }
    
    function GeneretateOption() {
        let options = []
        for(let i = 1; i <=10; i++) {
            options.push(<option value={i} >{i}</option>)
        }
        return options
    }

    return frameset ? (
        <section>
            <h2>{frameset.title}</h2>
            <img className="card-img-top" src={frameset.img} alt={frameset.title}/>
            <p>{frameset.decription}</p>
            <h4>{frameset.price}.00 €</h4>
            <select onChange={handleChange}  name="framesetColor">
                {frameset.color.map((color, index) => <option name={color} value={color}>{color}</option>)}
            </select>
            <select onChange={handleChange} name="famesetSize">
                {frameset.size.map((size, index) => <option value={size}>{size}</option>)}
            </select>
            <select onChange={handleChange} name="famesetQunatity">
                <GeneretateOption/>
            </select>
            <button type="button" class="btn btn-dark" onClick={() => {handleAddToCart(frameset)}}>Ajouter au panier</button>
        </section>

    ): (<h1>Lazy loading now</h1>)
}
