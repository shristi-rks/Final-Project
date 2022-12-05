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
/*                     <section>
                <div className="login">
                  
                        <h2>User Registration</h2>
                        <span>register and enjoy the service</span>
        
                        <form id='form1' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("firstname")} placeholder='firstname' />
                            <input type="text" {...register("lastname")} placeholder='username/nickname' />
                            <input type="text" {...register("nickname")} placeholder='username/nickname' />
                            <input type="text" {...register("email", { required : true                                                  })} placeholder='email' />
                            <input type="text" {...register("password")} placeholder='password' />
                            <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                            <button className='btn'>Submit</button>
                        </form>
        
                
                </div>
            </section>*/