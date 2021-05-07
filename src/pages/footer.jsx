import { useEffect, useState } from "react"
import { Menu } from "../components/header/header"
import MenuLi from "../components/menuLi"
import { getAllFrameset, getAllGroupset, getAllWheelset } from "../service/ApiService"

export default function Footer() {
    
    //const menu = Menu
    
    const [wheelset, setWheelset] = useState([])
    useEffect(async () => {
        const data = await getAllWheelset()
        if(data) {
            setWheelset(data)
        }
    }, [])

    const [groupset, setGroupset] = useState([])
    useEffect( async () => {
        const data = await getAllGroupset()
        if(data) {
            setGroupset(data)
        }
    }, [])

    const [frameset, setFrameset] = useState(false)
    useEffect( async () => {
        const data = await getAllFrameset()
        setFrameset(data)
    }, [])

    return (
        <>
        <h1>Footer</h1>

        {Menu.map((linkData, index) => <MenuLi key={index} nom={linkData.nom} url={linkData.url} />)}

        </>
    )
}
