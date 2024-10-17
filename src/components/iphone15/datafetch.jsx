import {useState} from 'react'

export function DataFetch(){

    const [product,setProduct]=useState({title:"",ratings:{"rate":0,"rating":0,"review":0},features:[],photo:"",price:0})

    function handledatafetch(){
        fetch('iphone.json')
            .then((response) =>{
                return response.json()
            })
            .then((data)=>{
                setProduct(data)
            })
        
    }
    return(
        <div>
            <div>
                <button onClick={handledatafetch}>Click</button>
            </div>
            <div className="row mt-4">
                <div className="col-4 p-4">
                    <img src={product.photo} alt="" width="300px" height="300px" />
                </div>
                <div className="col-6 text-primary p-4">
                    <p className="h4">{product.title}</p>
                    <div className="m-2">
                        <span>{product.ratings.rate}</span>
                        <span className="bi bi-star-fill text-white bg-warning"></span>
                        <span className="ms-2">{product.ratings.rating}</span> <span><b>Ratings</b></span>
                        <span className="ms-2">{product.ratings.reviews}</span> <b>Reviews</b>
                    </div>
                    <ul>
                        {
                            product.features.map(feature=>
                                <li key={feature}>{feature}</li>
                            )
                        }
                    </ul>
                </div>
                <div className="col-2 p-4 text-danger">
                    <p>&#8377;{product.price}</p>
                </div>
            </div>
        </div>
    )
}