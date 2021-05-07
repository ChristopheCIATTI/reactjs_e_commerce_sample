import { getAllByPlaceholderText } from "@testing-library/dom"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartNumberOfItem } from "../../App"
import { getByTitle } from "../../service/ApiService"
import { getNumberOfItem } from "../../service/CartService"
import MenuLi from "../menuLi"
import SearchResult from "../popup/searchResult"

export const Menu = [
    {nom: "Home", url: "/"},
    {nom: "Kit cadre", url: "/frameset"},
    {nom: "Paire de roues", url: "/wheelset"},
    {nom: "Groupe complet", url: "/groupset"},
    {nom: "A propos", url: "/about"},
    {nom: "Contact", url: "/contact"}
]

export default function Header() {

    const { cartNumberItem, setCartNumberItem } = useContext(CartNumberOfItem); 
        setCartNumberItem(getNumberOfItem())

    const [product, setProduct] = useState([])

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    let searchBarContent = null
    let resultSearchBar = {content: []}

    function CartIcon() {

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart" viewBox="0 0 24 24">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
        )
    }

    function AccountIcon() {
        return (    
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person" viewBox="0 0 24 24">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
        )
    }

    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name

        if(name === "searchBar") {
            searchBarContent = value
            //console.log(searchBarContent)
        }
    }

    async function getAllByPlaceholderText() {
        let data = await getByTitle(searchBarContent)
        setProduct(data)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter' && searchBarContent)
        {
            getAllByPlaceholderText()
            setIsOpen(true)
        }
    }

    return(
        <>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">        
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Road Bike Parts</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {Menu.map((linkData, index) => <MenuLi key={index} nom={linkData.nom} url={linkData.url} />)}
                    </ul> 
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"><span class="badge badge-light">{cartNumberItem}</span><CartIcon/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/account"><AccountIcon/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </span>
            </div>
                <input type="text" class="form-control" placeholder="Chercher un produit" aria-label="ProductFinder" aria-describedby="basic-addon1" name="searchBar" onChange={handleChange} onKeyDown={handleKeyDown}/>
            </div>
            {(isOpen && product) && <SearchResult
                content = {
                    product.map((data, index) => <h5 class="card-title"><Link to={"/" +  data.cat_product + "/" + data.id }>{data.title}</Link></h5>)
                }
                handleClose={togglePopup}
                />
            }

            
        </>
    )
}
/*
<div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Resultat de recherche: </h4>
                    </div>
                    <div className="modal-body">
                        <span onClick={props.handleClose}>&#x274c;</span>
                        <p>{props.content}</p>
                    </div>
                </div>
            </div>
        </div>

*/