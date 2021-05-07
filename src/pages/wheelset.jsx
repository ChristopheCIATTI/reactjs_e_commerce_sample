import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllWheelset } from "../service/ApiService"
import Card from "./card"

export default function Wheelset() {
    const [wheelset, setWheelset] = useState([])
    useEffect(async () => {
        const data = await getAllWheelset()
        if(data) {
            setWheelset(data)
        }
    }, [])

    return(
        <>
            <main className="container card-group">
                {wheelset.map((wheelset) => <Link key={'/wheelset' + wheelset.id} to={{pathname: '/wheelset/' + wheelset.id, state: {article: wheelset}}}><Card article={wheelset} /></Link>)}
            </main>
        
        </>
    )
}
