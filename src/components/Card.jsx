import React from "react"

export default function Card(props) {
  return (
      <section className="card">
        <img src={props.imageUrl} alt="image of experience" className="card--image" />
        <div className="cardText">
          <div className="card--location">
            <img src="../src/assets/images/location.png" alt="location icon" className="card--loc" />
            <span className="card--country">{props.location}</span>
            <a href={props.googleMapsUrl} className="card--googleMaps" target="_blank">View on Google Maps</a>
          </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--dates">{props.startDate} - {props.endDate}</p>
            <p className="card--description">{props.description}</p>
        </div>
      </section>
    )
}