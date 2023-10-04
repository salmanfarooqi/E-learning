import React from 'react'
import './carsoul.css'

function  Carsoule() {
  return (
    <div className="carousel-wrapper">

        {/* <div className="carsoul-image">
            <img  src='./images/carousel-1.jpg'></img>
        </div> */}
        <div className="carousel-text">
          <h2>best onnline course</h2>
          <h1>The best learning<br />online platform</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, sed ratione.
            <br/> Ullam neque deserunt facere, magni nemo,
             
          </h3>
         < div className="buttons">
          <button>Read more</button>
          <button className="join-button">join now</button>

        </div>
        </div>
        
    </div>
  )
}

export default Carsoule;