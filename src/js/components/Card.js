import React, {useContext}  from "react";
import { Link } from "react-router-dom";
import {Context} from '../AppContext';



export default function Card(props) {
  const {actions} = useContext(Context);

   return (

      <div className="card-characters card">
        <div className="card-body">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/01_194dfed7.jpeg?region=224%2C0%2C576%2C576&width=320"
            className="card-img-top"
            alt="..."
          />
          <h6 className="card-subtitle mb-2 text-muted" id="name">
            <Link to={`/characters/${props.name.split(' ').join('-').toLowerCase()}`} className='text-link'>{props.name.toUpperCase()}</Link>
          </h6>
          <h6 className="card-subtitle mb-2 text-muted" id="height">
            {props.height}
            {props.diameter}
            {props.passengers}
          </h6>
          <h6 className="card-subtitle mb-2 text-muted" id="birthdate">
            {props.birthdate}
            {props.population}
            {props.crew}
          </h6>
          <div className="card-footer text-muted" >Star Wars <span ><i className="fas fa-bookmark" id={props.name.split(' ').join('-').toLowerCase()} onClick={(e) => actions.addCards(e)}></i></span></div>
        </div>
      </div>
  );
}
