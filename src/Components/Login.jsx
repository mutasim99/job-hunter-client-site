import React from 'react';
import loginLottie from '../assets/Lottie/LoginLottie.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center max-w-5xl mx-auto '>
            <div className="card bg-base-100 w-full shadow-2xl">
                <h2 className='text-3xl font-bold text-center mt-2'>Login now!!</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div>
                        <p className='text-center'>Don't have any account?
                            <Link to='/auth/register' className='underline'>Register</Link>
                        </p>
                    </div>
                </form>
            </div>
            <div className='w-full'>
                <Lottie animationData={loginLottie}></Lottie>
            </div>
        </div>
    );
};

export default Login;