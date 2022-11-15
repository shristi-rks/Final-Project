const LogInForm = () => {
    return (
            <section>
                <div className="login">
                    <div className="col-1">
                        <h2>Sign In</h2>
                        <span>register and enjoy the service</span>
        
                        <form>
                            <input type="text"  placeholder='username' />
                            <input type="text"  placeholder='password' />
                            <input type="text"  placeholder='confirm password' />
                            <input type="text"  placeholder='mobile number' />
                            <button className='btn'>Sign In</button>
                        </form>
        
                    </div>
                    <div className="col-2">
    
                    </div>
                </div>
            </section>
    )
}

export default LogInForm ;