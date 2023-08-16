import React from 'react';

const Country = (props) => {
    const countryStyle ={
backgroundColor:'darkblue',
padding:'10px',
borderRadius: '20px',
border:'5px solid red'
    }
    const {name, flags, area, capital, population, length} = props.country;
    return (
        <div style={countryStyle}>

          <h2 style={{backgroundColor:'green',padding:'10px',
borderRadius: '20px',
border:'2px solid yellow'}}>Name: {name.common}</h2> 
          <img src={flags.png} alt="" />
          <h3 style={{color:'red'}}>Capital: {capital}</h3> 
          <h4>Area: {area}</h4>
          <h4>Peaple: {population}</h4>
        </div>
    );
};

export default Country;