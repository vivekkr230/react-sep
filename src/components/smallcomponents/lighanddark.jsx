import './lighanddark.css'
import {useState} from 'react'

export function LightAndDark(){
    const [themes,setThemes]=useState({style:''})
    function handleTheme(e){
        if (e.target.checked){
            setThemes({
                style:'dark'
            })
        }
        else{

        }
    }

    return(
        <div className="container-fluid" style={{height:"600px"}}>
            <div className="d-flex justify-content-center align-items-center" style={{marginTop:"200px"}}>
                <form action="" className="" style={themes}>
                    <span className="form-switch"></span>
                    <button className="" onClick={handleTheme}>Click</button>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" /></dd>
                    </dl>
                </form>
            </div>  
        </div>
    )
}