import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllFrameset } from "../service/ApiService"
import Card from "./card"

export default function Frameset() {

    const [frameset, setFrameset] = useState([])
    useEffect( async () => {
        const data = await getAllFrameset()
        if(data) {
            setFrameset(data)
        }
    }, [])    

    return(
        <>
            <main className="container card-group">
                {frameset.map((frameset) => <Link key={'/frameset' + frameset.id} to={{pathname: '/frameset/' + frameset.id, state: {article: frameset}}}><Card article={frameset} /></Link>)}
            </main>
        
        </>
    )
}
