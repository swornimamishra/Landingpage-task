import React from 'react'
import '../App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { items } from '../Data/Data';


function Section() {
  return (
    <div>
      <div class="icons bg-light text-center">
        <div class="container">
          <div class="row">

            {
              items.map((e) => {
                return <div class="col-lg-4">
                  <div class="icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <div class="icons-icon d-flex">{e.imgSrc}</div>
                    <h3>{e.cardTitle}</h3>
                    <p class="lead mb-0">{e.desc}</p>
                  </div>
                </div>
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section