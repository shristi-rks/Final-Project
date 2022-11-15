import { useForm } from 'react-hook-form'

const LogInForm = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data);
    return (
            <section>
                <div className="login">
                    <div className="col-1">
                        <h2>Sign In</h2>
                        <span>register and enjoy the service</span>
        
                        <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                            <input type="text" {...register("username")} placeholder='username' />
                            <input type="text" {...register("password")} placeholder='password' />
                            <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                            <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                            <button className='btn'>Sign In</button>
                        </form>
        
                    </div>
                    <div className="col-2">
    
                    </div>
                </div>
            </section>
    )
}
export default LogInForm;