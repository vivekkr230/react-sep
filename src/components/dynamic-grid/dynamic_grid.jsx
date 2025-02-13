
export function DynamicGrid(props)
{
    if(props.view === "grid"){
        return(
            <div>
                <h2>Grid View</h2>
            </div>
        )
    }
    else{
        return(
            <div>
                <h2>Card View</h2>
            </div>
        )
    }
    
}