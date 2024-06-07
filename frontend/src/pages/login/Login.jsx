import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const { loading, login } = useLogin();


    const handleSubmit = async(e) => {
        e.preventDefault();
        await login(username, password);
    };


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Login to
                <span className='text-blue-400'> CONVO</span>
            </h1>
            <form onSubmit={handleSubmit}>

                {/* Username */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10'
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                

                {/* Password */}
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input 
                         type='password' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                
                {/* Login Button */}

                <div>
                <button className="btn btn-block btn-sm mt-5"
                    disabled ={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>

                {/* link to SignUp */}

                <Link to='/signup' className='text-sm hover:text-white  mt-2'>Don't have an account? Sign Up</Link>
                 
            </form>
        </div>
      
    </div>
  )
}

export default Login;
