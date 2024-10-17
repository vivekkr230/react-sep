export function Loginpage(){
    return(
        <div className="container">
            <form>
                <h2>Login Form</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text"></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password"></input></dd>
                </dl>
            </form>
        </div>
        
    )
}