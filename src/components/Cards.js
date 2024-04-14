import React from 'react';
import '../App.css';
import { datas } from '../Data/Data';

function Cards() {
    return (
        <div>
            <div className="showcase">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        {datas.map((e, index) => (
                            <div key={index} className="row">
                                {index === 0 || index === 2 ? (
                                    <>
                                        <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: `url(${e.image})` }}></div>
                                        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                            <h2>{e.title}</h2>
                                            <p className="lead mb-0">{e.description}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-lg-6 text-white showcase-img" style={{ backgroundImage: `url(${e.image})` }}></div>
                                        <div className="col-lg-6 my-auto showcase-text order-lg-2">
                                            <h2>{e.title}</h2>
                                            <p className="lead mb-0">{e.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;




