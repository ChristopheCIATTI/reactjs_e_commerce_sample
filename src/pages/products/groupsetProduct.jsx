import { useEffect, useState } from "react"
import { getGroupsetById, refresh } from "../../service/ApiService"
import addToCart from "../../service/CartService"

export default function GroupsetProduct({match, location, ...rest}) {
    const groupsetModel = {
        id: 0,
        title: "title",
        description: "content",
        longueur_manivelle: 0,
        cassette_etagement: "",
        pedalier_denture: "",
        boitier_pedalier_type: "",
        price: 0,
        quantity: 0
    }

    let longueur_manivelle = {"longueur_manivelle": 170}
    let cassette_etagement = {"cassette_etagement": "11-25"}
    let pedalier_denture = {"pedalier_denture": "50-34"}
    let boitier_pedalier_type = {"boitier_pedalier_type": "BSA"}
    let quantity = {"quantity": 1}

    const [groupset, setGroupset] = useState(false)

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        
        if(name === "longueur_manivelle") 
        {
            longueur_manivelle.color = value
            console.log(longueur_manivelle)
        }

        if(name === "cassette_etagement")
        {
            cassette_etagement.size = value
            console.log(cassette_etagement)
        }

        if(name === "pedalier_denture")
        {
            pedalier_denture.size = value
            console.log(pedalier_denture)
        }

        if(name === "boitier_pedalier_types")
        {
            boitier_pedalier_type.size = value
            console.log(boitier_pedalier_type)
        }

        if(name === "groupsetQunatity")
        {
            quantity.quantity = value
        }
    }

    const handleAddToCart = (groupset) => {
       
        groupsetModel.id = groupset.id
        groupsetModel.title = groupset.title
        groupsetModel.description = groupset.description
        groupsetModel.longueur_manivelle = longueur_manivelle.longueur_manivelle
        groupsetModel.cassette_etagement = cassette_etagement.cassette_etagement
        groupsetModel.pedalier_denture = pedalier_denture.pedalier_denture
        groupsetModel.boitier_pedalier_type = boitier_pedalier_type.boitier_pedalier_type
        groupsetModel.price = groupset.price
        groupsetModel.quantity = quantity.quantity

        addToCart(groupsetModel)
        refresh()
        
    }

    function GeneretateOption() {
        let options = []
        for(let i = 1; i <=10; i++) {
            options.push(<option value={i} >{i}</option>)
        }
        return options
    }

    useEffect( async () => {
        const data = await getGroupsetById(match.params.id)
        setGroupset(data)
    }, [])

    return groupset ? (
        <section>
            <h2>{groupset.title}</h2>
            <img className="card-img-top" src={groupset.img} alt={groupset.title}/>
            <p>{groupset.description}</p>
            <h4>{groupset.price}.00 €</h4>
            <select onChange={handleChange} name="cassette_etagement">
                {groupset.cassette_etagement.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="pedalier_denture">
                {groupset.denture.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="longueur_manivelle">
                {groupset.longueur_manivelle.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="boitier_pedalier_types">
                {groupset.boitier_de_pedalier.map((type, index) => <option name={type} value={type}>{type}</option>)}
            </select>
            <select onChange={handleChange} name="groupsetQunatity">
                <GeneretateOption/>
            </select>
            <button type="button" class="btn btn-dark" onClick={() => {handleAddToCart(groupset)}}>Ajouter au panier</button>
        </section>
    ): (<h1>Lazy loading now</h1>)
}
