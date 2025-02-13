import {Navbar} from '../props/navbar'
import {DataGrid} from '../props/Datagrid'
import {useState , useEffect} from 'react'


export function Properties(){
    const[columns , setColumns] = useState([])

    const[rows , setRows] = useState([])

    function loadCategory()
    {
        fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(products =>{
            delete products.rating
            setColumns(Object.keys(products))
        })
    }
    function loadProduct(){
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            products.map(product => {
                delete product.rating
            })
            setRows(products)
        })
    }
    useState(()=>{
        loadCategory()
        loadProduct()
    },[])
    return(
        <div>
            <h3>Properties</h3>
            <div>
                <DataGrid caption="Stock Prices" fields={["Name","Stock","Prices"]} data={[{"Name":"iPhone","Stock":"false","Price":150000}]} />
            </div>
            <h3>fakestoreapi</h3>
            <div>
                <DataGrid caption="FakeStore" fields={columns} data ={rows} />
            </div>
        </div>
    )
}