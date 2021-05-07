import { useEffect, useState } from "react"
import { getWheelsetById, refresh } from "../../service/ApiService"
import addToCart from "../../service/CartService"

export default function WheelsetProduct({match, location, ...rest}) {
    const wheelsetModel = {
        id: 0,
        title: "title",
        description: "description",
        roue_libre_type: "roue_libre_type",
        pneu_type: "pneu_type",
        price: "price",
        quantity: 0
    }

    let roue_libre_type = {"roue_libre_type": "Shimano"}
    let pneu_type = {"pneu_type": "Pneu"}
    let quantity = {"quantity": 1}


    const [wheelset, setWheelset] = useState(false)

    useEffect(async () => {
        const data = await getWheelsetById(match.params.id)
        setWheelset(data)
    }, [])

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        
        if(name === "roue_libre_type") 
        {
            roue_libre_type.roue_libre_type = value
            console.log(roue_libre_type)
        }

        if(name === "pneu_type")
        {
            pneu_type.pneu_type = value
            console.log(pneu_type)
        }

        if(name === "wheelsetQunatity")
        {
            quantity.quantity = value
        }
    }

    const handleAddToCart = (wheelset) => {
       
        wheelsetModel.id = wheelset.id
        wheelsetModel.title = wheelset.title
        wheelsetModel.description = wheelset.description
        wheelsetModel.roue_libre_type = roue_libre_type.roue_libre_type
        wheelsetModel.pneu_type = pneu_type.pneu_type
        wheelsetModel.price = wheelset.price
        wheelsetModel.quantity = quantity.quantity

        addToCart(wheelsetModel)
        refresh()
        
    }

    function GeneretateOption() {
        let options = []
        for(let i = 1; i <=10; i++) {
            options.push(<option value={i} >{i}</option>)
        }
        return options
    }

    return wheelset ? (
        <section>
            <h2>{wheelset.title}</h2>
            <img className="card-img-top" src={wheelset.img} alt={wheelset.title}/>
            <p>{wheelset.decription}</p>
            <h4>{wheelset.price}.00 €</h4>
            <select onChange={handleChange} name="roue_libre_type">
                {wheelset.roue_libre_type.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="pneu_type">
                {wheelset.pneu_type.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="wheelsetQunatity">
                <GeneretateOption/>
            </select>
            <button type="button" class="btn btn-dark" onClick={() => {handleAddToCart(wheelset)}}>Ajouter au panier</button>
        </section>
    ): (<h1>Lazy loading now</h1>)
}
