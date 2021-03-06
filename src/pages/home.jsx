import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { getBestProduct } from '../service/ApiService'
import Card from './card'

export default function Home() {
    
    const carouselTextColor = "SteelBlue"

    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    
    const [product, setProduct] = useState([])
    useEffect( async () => {
        const data = await getBestProduct()
        if(data) {
            setProduct(data)
        }
    }, [])   

    return(
        <>
            <h1>Bienvue sur Road Bike Parts</h1>
            <section>

            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="/img/1597826073-a618.png"
                    alt=" "
                />
                <Carousel.Caption>
                    <h3 style={{color: carouselTextColor}}>Pinarello Dogma F12 Ineos Grenadier</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="/img/C64-PJWH.jpg"
                    alt=" "
                />
                <Carousel.Caption>
                    <h3 style={{color: carouselTextColor}}>Colnago C64 UAE Team</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src="/img/DSC01094.jpg"
                    alt=" "
                />
                <Carousel.Caption>
                    <h3 style={{color: carouselTextColor}}>Zipp 404 FSW</h3>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
            </section>

            <section>
                <h1>Nos meilleures pi??ces en stock</h1>
                <main className="container card-group">
                    {product.map((product) => <Link key={'/' + product.cat_product + product.id} to={{pathname: '/' + product.cat_product + '/' + product.id, state: {article: product}}}><Card article={product} /></Link>)}
                </main>
            </section>
            <section>
                <hr/>
                <p>
                    
                    Expert online du cycle depuis 2005, nous savons que l???envie de rouler n???attend pas.

                    Alors jour apr??s jour nous mettons tout en place pour satisfaire vos besoins et vous permettre de vivre votre passion v??lo en toute libert??.

                    V??lo, pi??ces d??tach??es, ??quipements, accessoires hometrainer, nous pensons et vivons v??lo. Route, BMX, VTT, Triathlon, Urbain, ??lectrique, nous proposons l???offre la plus compl??te, nous garantissons le meilleur service possible pour permettre ?? chaque cycliste de trouver ce dont il a besoin.

                    Passionn??s et nous-m??me pratiquants assidus, nous sommes ?? votre enti??re disposition pour vous conseiller, vous accompagner dans la pratique de votre sport.

                    Nos 210 conseillers et techniciens cycle sont ?? votre ??coute en permanence et toujours pr??ts ?? discuter avec vous de ride, de pignons ou de roue en carbone.
                    <Button variant="danger"><Link to={{pathname: '/about'}}>D??courvir</Link></Button>
                </p>
            </section>
            
        </>
    )
}
