import React, { useContext, useState } from 'react'
import Card from '../js/components/Card'
import { Context } from '../js/AppContext';
import Title from '../js/components/Title';

const Planets = () => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <Title text={'PLANETS //'} />
            <div className='container card-container'>
                <div className='row'>
                    {
                        store.planets.length > 0 &&
                        store.planets.map((p, i) => {
                            return (
                                <Card key={i} urlCard={p.url} name={p.name} diameter={`Diameter: ${p.diameter}km`} population={`Population: ${p.population}`} />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Planets;
