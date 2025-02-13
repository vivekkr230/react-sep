import {useState,useEffect} from 'react'

export function ReactTime() {
    const [clock,setClock] = useState(Date())
    const [msg, setMsg]  = useState('')
    function clockTime(){
        var currTime = new Date()
        setClock(currTime.toLocaleTimeString())
    }

    useEffect(()=>{
        setInterval(clockTime,1000);
        var date = new Date();
        var hours = date.getHours();
        if (hours >= 0 && hours <= 12){
            setMsg("Good Morning")

        }
        if (hours > 12 && hours <= 16){
            setMsg("Good Afternoon")

        }
        if (hours >16 && hours <= 18){
            setMsg("Good Evening")

        }
        if (hours >18 && hours <= 23){
            setMsg("Good Nifght")

        }
    },[])

    return (
        <div className="container-fluid">
            <div>
                <p className="text-center m-4">{clock}</p>
                <p className="text-center m-4">{msg}</p>

            </div>
        </div>
    )
}