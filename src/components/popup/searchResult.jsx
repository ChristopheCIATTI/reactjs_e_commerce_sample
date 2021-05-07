import React from 'react'

export default function SearchResult(props) {
    return(

        <div className="card">
            <h5 class="card-header"><span onClick={props.handleClose}>&#x274c;</span></h5>
            <div className="card-body">
            <p>{props.content}</p>
            </div>
        </div>        
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
/*
<div>
                        <span onClick={props.handleClose}>&#x274c;</span>
                        <p>{props.content}</p>
                    </div>

                    <div>
                        <span onClick={props.handleClose}>&#x274c;</span>
                        <p>{props.content}</p>
                    </div>
        

*/