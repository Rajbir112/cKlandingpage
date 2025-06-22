import React from 'react'
import './Welcome.css'
import eyewearImage from '../images/eyewear.jpg';
import tops from '../images/tops.jpg';
import bags from '../images/bags1.jpg';
const Welcome = () => {
    
    return (
        <>
            <div className='banner-section'>
                <p className="fw-semibold" id="Welcome"> Your Perfect Summer Starts Here — Unlock Calvin Kleins Hottest Deals Now! </p>
            </div>
            <div className="card-group">
                <div className="card">
                    <img src={eyewearImage} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title justify-content-center d-flex">Eyewear</h5>
                        <p className="card-text">"Make Your Vision Iconic - Shop Calvin Klein Shades for Bold, Timeless Style."</p>
                    </div>
                </div>
                <div className="card">
                    <img src={tops} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title justify-content-center d-flex">Tops</h5>
                        <p className="card-text">"Effortless. Elevated. Everyday Tops by Calvin Klein - Made for Modern Living."</p>
                    </div>
                </div>
                <div className="card">
                    <img src={bags} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title justify-content-center d-flex">Bags</h5>
                        <p className="card-text">"Designed to Carry More Than Just Essentials — With Style, Strength, and Simplicity."</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome
