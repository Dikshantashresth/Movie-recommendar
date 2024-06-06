import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <>
      <div className='container'>
        
        <h1>{props.title}</h1>
        <div className="img"><img src={props.image} alt="" width="320px" height="370px" /></div>
        <h2>Directors: {props.director}</h2>
        <h2>Cast: {props.cast}</h2>
        <h3>Budget: {props.budget}</h3>
        <h3>Review: {props.review}</h3>

      </div>
    </>
  )
}

export default Card
