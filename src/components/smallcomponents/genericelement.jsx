export function GenericElement(){
    return(
        <div className="container-fluid">
            <form action="" onSubmit={(e)=>{alert("form submitted");e.preventDefault()}}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password"/></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}