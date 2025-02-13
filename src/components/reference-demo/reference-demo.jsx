import { useEffect , useState , useRef} from "react"


export function RefrenceDemo()
{
    const [msg, setMsg] = useState()

    

    function Message1(){
        setMsg('Hello')
    }
    function Message2(){
        setMsg('Good Evening')
    }
    function Message3(){
        setMsg('Welcome to the React')
    }
    let m1 = useRef(null)
    let m2 = useRef(null)
    let m3 = useRef(null)

    useEffect(()=>{
        m1 = setTimeout(Message1,3000)
        m2 = setTimeout(Message2,6000)
        m3 = setTimeout(Message3,9000)
    },[])

    function handleClick(){
        clearInterval(m2)
        console.log('handleClick Executed')
    }

    return(
        <div className="container-fluid m-4">
            <button className="btn btn-warning" onClick={handleClick}>Cancel 2nd</button>
            <p className="text-center h3">{msg}</p>
        </div>
    )
}