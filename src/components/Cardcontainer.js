import React from 'react'
import Card from './Card';
const Cardcontainer = ( )=>{
    return(
        <div className="filter-container">
            <Card
            id={1}
            title={'React.js'}
            info={"the best JavaScript library for building user interface"}
            image={"https://cdn.thecodehelp.in/Agra.jpeg"}
            price={22900}
            />

        </div>
    )
}

export default Cardcontainer;