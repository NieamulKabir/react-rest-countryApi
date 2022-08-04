import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, area, region,flags } = props.country
    return (
        <div className='country'>
            <h2>Country Name : {name.common} </h2>
            <img src={flags.png} alt="" />
            <p><b> Population : {population}</b></p>
            <p>Area : {area}</p>
            <p><small>Region : {region}</small></p>

        </div>
    );
};

export default Country;