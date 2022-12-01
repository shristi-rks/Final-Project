import React from 'react';
import { useForm } from 'react-hook-form'
import './Login.css'

export function LogInForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);
    return (
            <section>
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
            </section>
    )
}
