

export function FormEvents(){

    function formSubmit(){
        alert(JSON.stringify({Name:"Vivek",Surname:"Kumar"}));
    }
    return(
        <div className="container-fluid">
            <form action="" onSubmit={formSubmit}>
                <button>submit</button>
            </form>

        </div>
    )
}