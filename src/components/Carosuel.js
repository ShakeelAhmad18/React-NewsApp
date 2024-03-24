import React, { Component } from 'react'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
export default class Carosuel extends Component {
    render() {
        return (
            <div>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner my-1">
                        <div className="carousel-item active carousel-image ">
                            <img src={pic1} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-image ">
                            <img src={pic2} className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item carousel-image ">
                            <img src={pic3} className="d-block w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}
