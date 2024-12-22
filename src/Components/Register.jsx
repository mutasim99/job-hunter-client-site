import React from 'react';
import registerLottie from '../assets/Lottie/register-lottie.json'
import Lottie from 'lottie-react';


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value
        const user = {name, email, password, photo} 
        console.log(user);
    }
    return (
        <div className='flex flex-col-reverse gap-4 lg:gap-8 md:flex-row justify-center items-center max-w-5xl mx-auto p-10 max-h-screen'>
            <div className="card bg-base-100 w-full  shadow-2xl">
                <h2 className='text-3xl font-bold text-center mt-2'>Register now!!</h2>
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="url" name='photo' placeholder="enter photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
            <div className='w-full hidden md:block'>
                <Lottie animationData={registerLottie} className='w-full h-full'></Lottie>
            </div>
        </div>
    );
};

export default Register;