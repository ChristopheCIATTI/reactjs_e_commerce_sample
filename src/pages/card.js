export default function Card({article}) {

    return(
        <div className="card">
            <img className="card-img-top" src={article.img} alt={article.title}/>
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.price}</p>
            </div>
        </div>
    )
}
