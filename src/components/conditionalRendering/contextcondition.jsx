import { useState , useEffect} from 'react'


function ViewComponent(props)
{
    return(
        <div>
            <label>{
                props.UserName
                }
            </label>
        </div>
        
    )
}

function EditComponent(props)
{
    return(
        <input type="text" value={props.UserName} />
    )
}

export function CancelRender()
{

    const[username , setUserName] = useState("Khaleshi")
    const[btnText , setBtnText] = useState('Edit')
    const[component , setComponent] = useState()

    useEffect(()=>{
        setComponent(<ViewComponent UserName={username}  />)
    },[])

    function ToggleComponent()
    {
        if(btnText === "Edit"){
            setBtnText("Save")
            setComponent(<EditComponent UserName={username}/>)
        }
        else{
            setBtnText("Edit")
            setComponent(<ViewComponent UserName={username}/>)
        }
    }
    return(
        <div className="container-fluid">
            <h3>User Detail</h3>
            <table className="table table-hover w-50">
                <thead></thead>
                <tbody>
                    <tr>
                        <td> Name: </td>
                        <td>{component}</td>
                        <td>
                            <button onClick={ToggleComponent} className="btn btn-danger me-3">{btnText}</button>
                            <button className="btn btn-success">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}