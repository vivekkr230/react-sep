import {useReducer} from 'react'


let intialState = {count : 0}

function reducer(state,action)
{
    switch(action.type)
    {
        case "join" :
            return {count : state.count + 1};
        case "exit":
            return {count : state.count -1};
    }
}


export function ReducerView(){

    const [state , dispatch] = useReducer(reducer , intialState)
    function handleExitClick(){
        dispatch({type : 'exit'})
    }

    function handleJoinClick(){
        dispatch({type : 'join'})
    }

    return(
        <div>
            <h2>MitroPolitian</h2>
            <div className="m-4">
                <button onClick={handleJoinClick} className="bi bi-youtube btn btn-success me-2"> Join</button>
                <button onClick={handleExitClick} className="btn btn-danger">Exit</button>
            </div>
            <iframe className="ms-2" src="https://www.youtube.com/embed/gl2F17ToG-A?si=BAGMY7tQ5qgzEsmQ" frameborder="0" width="400" height="300"></iframe>

            <div className="ms-2">
                liveViwers : {state.count}
            </div>
        </div>
    )
}