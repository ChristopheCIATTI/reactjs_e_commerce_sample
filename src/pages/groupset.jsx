import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllGroupset } from "../service/ApiService"
import Card from "./card"


export default function Groupset() {

    const [groupset, setGroupset] = useState([])
    useEffect( async () => {
        const data = await getAllGroupset()
        if(data) {
            setGroupset(data)
        }
    }, [])

    return(
        <>
            <main className="container card-group">
                {groupset.map((groupset) => <Link key={'/groupset' + groupset.id} to={{pathname: '/groupset/' + groupset.id, state: {article: groupset}}}><Card article={groupset} /></Link>)}
            </main>
        </>
    )
}
