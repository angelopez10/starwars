import React, {useContext} from 'react'
import Card from './Card';
import {Context} from '../AppContext';

export default function Footer() {
    const {store} = useContext(Context);

    return (
        <div>
            <div className='container'>
            <h1 className='section'>YOUR FAVORITES //</h1>
            </div>
            <div className='container card-container'>
            <div className='row'>
            {
                store.favorites.length > 0 &&
                store.favorites.map((p, i) => {
                   if(p.url.includes("people")){
                       console.log(p.url)
                    return (
                        <Card key={i} name={p.name} height={`Height: ${p.height}cm`} birthdate={`Birthdate: ${p.birth_year}`}/>
                    
                        )
                   }else if(p.url.includes("planets")){
                    return (
                        <Card key={i} urlCard={p.url} name={p.name} diameter={`Diameter: ${p.diameter}km`} population={`Population: ${p.population}`} />

                    )
                   }else if(p.url.includes("vehicles")){
                    return (
                        <Card urlCard={p.url} name={p.name} crew={`Crew: ${p.crew}`} passengers={`Passengers: ${p.passengers}`}/>
                    
                )
                   }
                })
            }
        </div>
        </div>
        </div>
        
    )
}
