import {useState,useEffect} from "react"

export function LoadImages(){

    const [buttoncontainer,setButtonContainer] = useState({display:"block"})
    const [spinnercontainer,setSpinnerContainer] = useState({display:"none"})
    const [imagecontainer,setImageContainer] = useState({display:"none"})
    const [count,setCount] = useState(0)

    useEffect(()=>{

    },[])

    

    var i=0;
    function loadImage(){
        i++;
        setCount(i)
        if (i == 100){
            setSpinnerContainer({display:"none"});
            setImageContainer({display:"block"});
            return;
        }
    }

    function loadClick(){
        setInterval(loadImage,200)
        setButtonContainer({display:"none"})
        setSpinnerContainer({display:"block"})
        
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center m-4">
            <div style={buttoncontainer}>
                <button className="btn btn-primary" onClick={loadClick}>Load Images</button>
            </div>
            <div style={spinnercontainer}>
                <p className="spinner-border">
                </p>
                <div className="text-center">{count} % loaded</div>
            </div>
            <div style={imagecontainer}>
                <img src="iphone.webp" alt="" width="300px" height="400px" />
            </div>
        </div>
    )
}