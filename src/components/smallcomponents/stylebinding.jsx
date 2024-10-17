import {useState} from 'react'

export function StyleBinding(){

    const [styleBinding,setStyleBinding]=useState({border:'',boxShadow:'',mes:''})

    function handleStyleBinding(e){
        if (e.target.value==''){
            setStyleBinding({
                border:'2px 2px solid',
                boxShadow:"2px 2px 2px red",
                mes:"fill something"
                }
            )
        }
        else{
            setStyleBinding({
                border:'2px 2px solid',
                boxShadow:"2px 2px 2px green",
                mes:"username entered"
            }
                
            )
        }
    }

    return(
        <div>
            <h2>Details</h2>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" onChange={handleStyleBinding} style={styleBinding} /></dd>
            </dl>
            <p>{styleBinding.mes}</p>
        </div>
    )
}