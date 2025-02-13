import { useState, useEffect } from 'react'

export function FakeStoreWithFilter() {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([{ id: '', title: '', price: 0, description: '', image: '', rating: { rate: 0, count: 0 } }])
    const [counts, setCount] = useState(0)
    const [showProduct, setShowProduct] = useState([])
    function loadCategories() {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((opt) => {
                // alert("goin to add all category")

                setCategories(opt)
            })
    }

    function handleCategoryChange(e) {
        alert(`you just clicked ${e.target.value}`)
        if (e.target.value != "all") {
            loadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
        else {
            loadProducts(`https://fakestoreapi.com/products`)
        }
    }

    function loadProducts(url) {
        fetch(url)
            .then(res => res.json())
            .then((item) => {
                setProducts(item)
            })
    }

    function handleProductDisplay(e) {
        // alert(`you just clicked ${e.target.value}`)
        fetch(`https://fakestoreapi.com/products/${e.target.value}`)
            .then(res => res.json())
            .then((prod) => {
                setShowProduct(prod)
                setCount(showProduct.length)
            })
    }

    useEffect(() => {
        loadCategories()
        loadProducts()
    }, [])

    return (
        <div className="container-fluid">
            <header className="d-flex justify-content-between mt-2">
                <div>
                    <p className="h2">Shopper.</p>
                </div>
                <div>
                    <span className="me-2">Home</span>
                    <span className="me-2">Men's</span>
                    <span className="me-2">Women's</span>
                    <span className="me-2">Kid's</span>
                </div>
                <div>
                    <button className="btn btn-danger rounded rounded-3">
                        <span className='bi bi-cart-3'></span>cart
                        <span>{counts}</span>
                    </button>
                </div>
            </header>
            <section className="row mt-4">
                <nav className="col-2">
                    <label htmlFor="" className=""><b>Select Catrgories</b></label>
                    <select name="" id="" className="form-select mt-3" onChange={handleCategoryChange}>
                        {
                            categories.map(category =>
                                <option key={category} value={category}>{category.toUpperCase()}</option>)
                        }
                    </select>
                </nav>
                <main className="col-8">
                    <div className="d-flex overflow-auto" style={{ height: '600' }}>
                        <div className="d-flex flex-wrap">
                            {
                                products.map(product =>
                                    <div className="card m-2" style={{ width: "270px", height: "400px" }}>
                                        <img className="card-img-top" src={product.image} alt="" width="140" height="140" />
                                        <div className="card-header overflow-auto">
                                            <p className="card-title">{product.description}</p>
                                        </div>
                                        <div className="card-body">
                                            <span>{product.rating.rate}</span> Rates<br></br>
                                            <span>{product.rating.count}</span> Reviews
                                        </div>
                                        <div className="card-footer">
                                            <p>&#8377;{product.price}</p>
                                            <button value={product.id} onClick={handleProductDisplay} className="btn btn-primary w-100">Add to cart</button>
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>

                </main>
                <aside className="col-2">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showProduct.map(item =>
                                    <tr>
                                        <td key={item.id}>{item.id}</td>
                                        <td><img src={item.image} height="50" width="50" alt="" /></td>
                                    </tr>
                                    )

                            }
                        </tbody>
                    </table>

                </aside>
            </section>
        </div>
    )
}