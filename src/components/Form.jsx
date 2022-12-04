const Form = () => {
    return (
        <div>
            <form>
                <label>First Name:</label>
                <input type="text" name="fname" />
                <label>Last Name:</label>
                <input type="text" name="lname"/>
                <br/>
                <label>Age:</label>
                <input type="number" name="age" maxLength="2" />
                <br/>
                <label>Address:</label>
                <br/>
                <label>Description:</label>
                <br/>
                <textarea rows="10" cols="30" name="comment"></textarea>
                <br/>

            </form>
        </div>
    )
}
export default Form ;
/*            <section>
                <div className="login">
                    <div className="div">
                        <h2>Sign In</h2>
                        <br />
                        <br />
                    </div>
        
                        <form id='form'  onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username")} placeholder='username/nickname' />
                            <br />
                            <br />
                            <input type="text" {...register("password")} placeholder='password' />
                            <br />
                            <br />
                            <button className='btn'>Sign In</button>
                        </form>

                </div>
            </section>*/