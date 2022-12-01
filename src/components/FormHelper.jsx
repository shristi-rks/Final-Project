import React from 'react';
import { useForm } from 'react-hook-form'

const FormHelper = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);
    return (
            <section>
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
            </section>
    )
}

export default FormHelper;