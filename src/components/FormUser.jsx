import React from 'react';
import { useForm } from 'react-hook-form'
import { addUserData } from '../postUserData';
import './FormUser.css'
const FormUser = () => {
    const { register, handleSubmit, formState: { errors }  } = useForm()
    const onSubmit = async(requestData) => {
        const responseData = await addUserData(requestData)
        console.log(responseData);
    }
    return (
            <section>
                <div className="login">
                  
                        <h2>User Registration</h2>
                        <span>register and enjoy the service</span>
    
                        <form id='form1' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username")} placeholder='username' />
                            <br/>
                            <input type="text" {...register("email", { required : true })} placeholder='email' />
                            {errors.email && <span style={{ color: "red" }}>*Email* is mandatory </span>}
                            <br/>
                            <input type="password" {...register("password")} placeholder='password' />
                            {errors.password && <span style={{ color: "red" }}>*Password* is mandatory </span>}
                            <br/>
                            <input type="password" {...register("confirmpwd")} placeholder='confirm password' />
                            {errors.password !== errors.confirmpwd && <span style={{ color: "red" }}>*Password* doesnot match </span>}
                            {/* the name of the variables should be the same as in the database eg:"confirmpwd"*/}
                            <br/>
                            <button className='btn'>Submit</button>
                        </form>
        
                
                </div>
            </section>
    )
}

export default FormUser;