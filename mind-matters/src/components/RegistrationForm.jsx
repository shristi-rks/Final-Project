import React from 'react';
import { useForm } from 'react-hook-form'

const RegistrationForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);
    return (
        
            <section>
                <div className="login">
                  
                        <h2>User Registration</h2>
                        <span>register and enjoy the service</span>
        
                        <form id='form1' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username")} placeholder='username/nickname' />
                            <input type="text" {...register("email", { required : true })} placeholder='email' />
                            <input type="text" {...register("password")} placeholder='password' />
                            <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                            <button className='btn'>Submit</button>
                        </form>
        
                
                </div>
            </section>
    )
}

export default RegistrationForm;