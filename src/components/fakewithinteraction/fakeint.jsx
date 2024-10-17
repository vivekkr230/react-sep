
import {useState,useEffect} from 'react'

export function FakeStoreWithFilter(){

    const [categories,setCategories]=useState([])
    const [products,setProducts]=useState([{"id":0,"title":'',"price":0,"category":'',"image":'',"rating":{"rate":0,"count":0}}])
    const [countProduct,setCountProduct]=useState(0)
    const [cartItem,setCartItem]=useState([{"id":0,"title":'',"price":0}])
    function loadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(categorie=>{
            categorie.unshift("all")
            setCategories(categorie)
        })
    }

    function loadProducts(url){
        fetch(url)
        .then(res=>res.json())
        .then(product=>{
            setProducts(product)
        })
    }

    useEffect(()=>{
        loadCategories()
        loadProducts('https://fakestoreapi.com/products')
    },[])

    function handleCategoryChange(e){
        if(e.target.value=="all"){
            loadProducts(`https://fakestoreapi.com/products`)

        }
        else{
            loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)

        }
    }
    function handleCartItems(e){
        alert(`${e.target.value}`)
        cartItem.push(e.target.value)
        setCountProduct(cartItem.length)
    }
    return(
        <div className="container container-fluid">
            <header className="d-flex justify-content-between m-2  bg-light">
                <div>
                    <h2>Shopper.</h2>
                </div>
                <div>
                    <span className="me-2 ">Home</span>
                    <span className="me-2 ">Kid's</span>
                    <span className="me-2 ">Men's</span>
                    <span className="me-2 ">Women's</span>
                </div>
                <div>
                    <button className="btn btn-danger">
                        <span>Add to Cart</span>
                        <span className="bi bi-cart-3"></span>
                        <span>{countProduct}</span>
                    </button>
                </div>
            </header>
            <section className="row mt-4" onChange={handleCategoryChange}>
                <nav className="col-2">
                    <label><b>Select Categories</b></label>
                    <select name="" id="" className="form-select mt-1">
                        
                        {
                            categories.map(categorie=>
                                <option key={categorie} value={categorie}>{categorie.toUpperCase()}</option>)
                        }
                    </select>
                </nav>
                <main className="col-8 ">
                    <div className="d-flex flex-wrap overflow-auto" style={{height:'500px'}}>
                        {
                            products.map(product=>
                                <div className="card m-2" style={{height:"400px",width:'250px'}}>
                                    <img src={product.image} className="card-img-top" height="200" width="140"></img>
                                    <div className="card-header overflow-auto" style={{height:"100px"}}>
                                        <p className="card-title">{product.title}</p>
                                    </div>
                                    <div className="card-body" style={{height:"100px"}}>
                                        <dl>
                                            <dt>price</dt>
                                            <dd>{(product.price).toLocaleString('en-IN',{style:'currency',currency:'INR'})}</dd>
                                        </dl>
                                    </div> 
                                    <div className="card-footer" style={{height:"100px"}}>
                                        <button value={product.id} className="w-100 btn btn-danger" onClick={handleCartItems}>
                                            Add to cart
                                        </button>
                                    </div>  
                                </div>
                                )
                        }
                    </div>
                </main>
                <aside className="col-2">
                        <table className="table table-hover">
                            <caption className="caption-top"></caption>
                            <thead>
                                <tr>
                                    <th>title</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                </aside>
            </section>
        </div>
    )
}