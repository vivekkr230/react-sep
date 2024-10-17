import { useState, useEffect } from 'react'

export function FakeStoreApi() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className="container container-fluid">
            <h2 className="text-center text-danger">FakeSotreApi</h2>
            <div className="d-flex flex-wrap">
                {
                    products.map(product =>


                        <div className="card   m-4" style={{ width: "300px" }}>
                            <img src={product.image} className="card-img-top p-2" height="150" width="100"></img>
                            <div className="card-body">
                                <h5><span className="text-primary">Category:</span><span>{product.category}</span></h5>
                                <h5><span className="text-primary">Price:</span><span>&#8377;{product.price}</span></h5>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <span className="text-danger"><b>{product.rating.rate}</b></span>
                                </div>
                                <div>
                                    <span className="text-danger">{product.rating.count}</span>
                                    <span><b className="text-danger"> Ratings</b></span>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}