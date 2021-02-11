/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import Iframe from 'react-iframe';

function TokenEngineer() {
    const source = "https://www.youtube.com/embed/HtyPJ4Mup_g";
    return (
            <main>
                <div className="container-fluid">
                    <h3> </h3>
                    <ol className="breadcrumb mb-4 alert-primary">
                        <li className="breadcrumb-item active ">Token Engineer</li>
                    </ol>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm">
                                <div className="card">
                                    <div className="card-body">
                                        <Iframe url={source}
                                                className="align-self-center"
                                                width="100%"
                                                height={500}
                                                title="Citra Sanxing Indonesia"
                                                frameBorder={0}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                display="initial"
                                                position="relative"
                                                allow="fullscreen" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default TokenEngineer
