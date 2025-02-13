import { useState} from 'react'



function ViewClick(props)
{
    return(
        <div>
            <tr>
                <td>Name:</td>
                <td><label>{props.uname}</label></td>
                <td><button>Edit</button></td>
            </tr>
        </div>
    )
}

function EditClick(props)
{
    return(
        <div>
            <tr>
                <td>Name:</td>
                <td><input type="text" value={props.uname}></input></td>
                <td><button>Save</button></td>
            </tr>
        </div>
    )
}


export function ConditionRender()
{
    const [component , setComponent] = useState(<ViewClick />)

    function viewclick(){
        setComponent(<ViewClick/>)
    }

    function editclick(){
        setComponent(<EditClick/>)
    }

    return(
        <div className="container-fluid">
            <h3 className="me-4">User Details
                <button onClick={viewclick} className="bi bi-eye-fill m-2"></button>
                <button onClick={editclick} className="bi bi-pen-fill"></button>
            </h3>
            <table className="table table-hover w-50">
                <tbody>
                    {component}
                </tbody>

            </table>
            
        </div>
    )
}