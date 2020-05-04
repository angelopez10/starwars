import React, { useContext, useState } from 'react'
import CardInfo from '../js/components/CardInfo';
import { Context } from '../js/AppContext';


const CardBio = function () {
    const { store, actions } = useContext(Context);
    
    return (
    <div>
        <CardInfo/>
    </div>)
}

export default CardBio;