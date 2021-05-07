import { useState } from "react"
import { Link } from "react-router-dom"
import { validCP, validEmail } from "../service/regex"

export default function DeliveryCoords() {
    const [userInfo, setUserInfo] = useState({
        email:  '', 
        firstName: '',
        lastName: '',
        adresse1: '',
        adresse2: '',
        cp: '',
        city: '',
        phoneNumber: ''
        
    })

    
    const [email, setEmail] = useState()
    const [civility, setCivility] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [adresse1, setAdresse1] = useState()
    const [adresse2, setAdresse2] = useState()
    const [cp, setCP] = useState()
    const [city, setCity] = useState()
    const [country, setCountry] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    
    
    const handleChange = (event) => {
        const value = event.currentTarget.value
        const name = event.currentTarget.name
        
       if(name == "email") {
           setEmail(value)
       }

       if(name == "civility") {
           setCivility(value)
       }

       if(name == "firstName") {
            setFirstName(value)
       }

       if(name == "lastName") {
            setLastName(value)
        }

        if(name == "adress1") {
            setAdresse1(value)
        }

        if(name == "adress2") {
            setAdresse2(value)
        }
        
        if(name == "cp") {
            setCP(value)
        }

        if(name == "city") {
            setCity(value)
        }

        if(name == "country") {
            setCountry(value)
        }

        if(name == "phoneNumber") {
            setPhoneNumber(value)
        }
        
    }

    function DisplayForm() {
        return (
            <form>
            <div className="form-group">
                <label>Email address </label>
                <input type="email" class="form-control" 
                       id="customerEmail" placeholder="name@example.com" 
                       value={email} onChange={handleChange} required/>
            </div>
            <label>Civilitée</label>
            <div className="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="civility"
                 id="radioHomme" value="Homme" onChange={handleChange} checked/>
                <label class="form-check-label" for="radioHomme">
                    Homme
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="civility" id="radioFemme" 
                value="Femme" onChange={handleChange}/>
                <label class="form-check-label" for="radioFemme">
                    Femme
                </label>
            </div>
            <div className="form-group">
                <label>Nom </label>
                <input type="text" class="form-control" name="firstName" id="customerFirstName" placeholder="Martin"
                value={firstName} onChange={handleChange} required/>
            </div>
            <div className="form-group">
                <label>Prénom </label>
                <input type="text" class="form-control" name="lastName" id="customerLastName" placeholder="Ludovic"
                value={lastName} onChange={handleChange} required/>  
            </div>
            <div className="form-group">
                <label>Adresse 1 </label>
                <input type="text" name="adress1" class="form-control" id="customerAdress1" placeholder="38 rue de la paix"
                value={adresse1} onChange={handleChange} required/>  
            </div>
            <div className="form-group">
                <label>Adresse 2 </label>
                <input type="text" name="adress2" class="form-control" id="customerAdress2" placeholder="batiement B impasse des rosiers"
                value={adresse2} onChange={handleChange} />  
            </div>
            <div className="form-group">
                <label>Code postal </label>
                <input type="number" name="cp" class="form-control" id="customerCP" placeholder="75001" 
                value={cp} onChange={handleChange} required/>  
            </div>
            <div className="form-group">
                <label>Ville </label>
                <input type="text" name="city" class="form-control" id="customerCity" placeholder="Paris"
                value={city} onChange={handleChange} required/>  
            </div>
            <div class="form-group">
                <label>Pays </label>
                <select class="form-control" name="country" id="customerCountry" onChange={handleChange}>
                    <option value="France">France</option>
                    <option value="Belgique">Belgique</option>
                    <option value="Suisse">Suisse</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Andorre">Andorre</option>
                    <option value="Monaco">Monaco</option>
                </select>
            </div>
            <div className="form-group">
                <label>N° de téléphone </label>
                <input type="number" class="form-control" id="customerPhoneNumber" placeholder="0600000000" 
                value={phoneNumber} onChange={handleChange} name="phoneNumber" required/>  
            </div>
        </form>
        )
    }
    
    function DisplayActionButton() {
        return(
            <div>
                <Link to='/'><button type="button" className="text-dark btn btn-outline-light"></button>Annuler</Link>
                <button type="button" className="btn btn-outline-warning" onClick={handleSubmit}>Valider</button>
            </div>
        )
    }

    const handleSubmit = () => {
       
       /*
        if(!validEmail.test(email)) {
            console.log("error email")
            console.log(email)
        }
        */   
    }

    return(
        <section>
            <DisplayForm/>
            <DisplayActionButton/>
        </section>
    )
}

/*
<DisplayActionButton/>

<DisplayForm/>

*/
