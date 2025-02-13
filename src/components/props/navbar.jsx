


export function Navbar(props){
    return(
        <div className={props.bg_colour}>
            <div>
                {/* <p className="h3">{vivek.brandname}</p> this too works fine we can use any parameter */}
                <p className="h3">{props.brandname}</p>
            </div>
            <div>
                {
                    props.menuitem.map((items)=>
                    <span className="me-2">{items}</span>
                    )
                }
            </div>
            <div>
                <span className="bi bi-person"></span>
                <span className="bi bi-search"></span>
                <span className="bi bi-cart5"></span>
            </div>
        </div>
    )
}