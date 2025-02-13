import { useState } from "react"


export function CardSlideShow()
{
    const [product,setProduct] = useState({})

    let productId = useRef(1)

    function loadProduct(){
        
    }
    return(
        <div className="container-fluid d-flex justify-content-center card w-50">
            <div className="card-header text-center">

            </div>
            <div className="card-body text-center">
                <div className="row">
                    <div className="col-1">
                        <button className="btn btn-primary">&lt;</button>
                    </div>
                    <div className="col-10">
                        <img src="" alt="" height="300" width="100%" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-warning">&gt;</button>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center">
                <button className="btn btn-outline-primary">
                    <span className="bi bi-play"></span>
                </button>
                <button className="btn btn-outline-danger ms-2">
                    <span className="bi bi-pause"></span>
                </button>
            </div>
        </div>
    )
}