import React from 'react'
import "../App.css";
import { prod } from '../Data/Data';

function Feedback() {
    return (

        <div class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                    {
                        prod.map((e) => {
                            return <div class="col-lg-4">
                                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                                    <img class="img-fluid rounded-circle mb-3" src={e.srcImg} alt="..." />
                                    <h5>{e.names}</h5>
                                    <p class="font-weight-light mb-0">{e.feedBack}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Feedback