import React from 'react'


const Details = (props) => {
    


  return (
    <div className="card-details">
    <h2> 
        Nombre:
        <span>{props.nombre}</span>
    </h2>
     <h2>
        Nacimiento:
        <span>{props.nacimiento}</span>
     </h2>
     <h2>
        Genero:
        <span>{props.genero}</span>
     </h2>
     <h2>
       Status:
        <span>{props.status}</span>
     </h2>
     <h2>
        Frases:
        <span>{props.frases}</span>
     </h2>
    </div>

  )
}


export default Details