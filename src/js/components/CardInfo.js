import React from 'react'


export default function CardInfo(props) {

    
    return (
        <div className='container'>
            <div className="jumbotron p-0">
                <div className='row'>
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/01_194dfed7.jpeg?region=0%2C0%2C1024%2C576&width=768"
                        className="card-img-big col-8"
                        alt="..."
                    />
                    <div className='col-4'>
                    <h6 className="display-4 titulo">{props.name}</h6>
                    
                    <p className='description'>Klaud might have joined the Resistance as a result of mistaken identity, but he is welcomed as an ally by the freedom fighters.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
