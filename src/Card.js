import React from "react"

export default function Card(props) {
    return (
      <div key={props.card.id} className="products-container">
        <img className="product-image" src={props.card.imageUrl} />
        <div className="product-description">
          <h2>{props.card.name}</h2>
          <p>{props.card.category}</p>
          <h4>{props.card.price}</h4>
        </div>
      </div>
    )
}