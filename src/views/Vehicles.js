import React, { useContext, useState } from 'react'
import Card from '../js/components/Card'
import { Context } from '../js/AppContext';
import Title from '../js/components/Title';

export default function Vehicles() {
    const {store, actions} = useContext(Context);
    return (
        <div>
            <Title text={'VEHICLES //'}/>
        <div className='container card-container'>
        <div className='row'>
            {
                store.vehicles.length > 0 &&
                store.vehicles.map((p) => {
                    return (
                            <Card urlCard={p.url} name={p.name} crew={`Crew: ${p.crew}`} passengers={`Passengers: ${p.passengers}`}/>
                        
                    )
                })
            }
        </div>
        </div>
        </div>
    )
}
