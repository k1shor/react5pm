import React from 'react'
import './product.css'

const Product = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-5">
                <div className="col">
                    <div className="card mb-2">
                        <img src="./images/img1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img4.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img6.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img7.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-lg mb-2">
                        <img src="./images/img8.jpg" className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product