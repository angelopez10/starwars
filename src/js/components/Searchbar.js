import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
    return (
        <div className='container'>
            <div className="input-group input-group-lg" id='searchbar'>
                <input type="text" className="form-control" placeholder="Search Data" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" id='search'>
                    <span><FontAwesomeIcon icon={faSearch} /> Search</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
