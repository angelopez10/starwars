import React, {useContext, useState} from 'react'
import Card from '../js/components/Card';
import {Context} from '../js/AppContext';
import Title from '../js/components/Title';

const Characters = () => {
    const {store, actions} = useContext(Context);
    
    return (
        <div>
            <Title text={'CHARACTERS //'}/>
        <div className='container card-container'>
        <div className='row'>
            {
                store.people.length > 0 &&
                store.people.map((p, i) => {
                    
                    return (
                            <Card key={i} name={p.name} height={`Height: ${p.height}cm`} birthdate={`Birthdate: ${p.birth_year}`}/>
                        
                    )
                })
            }
        </div>
        </div>
        </div>
    )
}
export default Characters;