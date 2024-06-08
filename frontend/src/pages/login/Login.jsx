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
    <div>

        {/* login page div */}
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        
        {/* both pic and login page */}
        <div>
        <div className='p-6 rounded-lg bg-black shadow-lg  shadow-rose-500'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                <span className='text-rose-500'> {">>Staxx<<"}</span><br></br>
                Hello Again! 
            </h1>
            <form onSubmit={handleSubmit}>

                {/* Username */}
                <div className='flex flex-col mt-4 mb-4'>
                <label className=" bg-black border-rose-500 input input-bordered flex items-center gap-2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className=" text-white w-4 h-4 opacity-100"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}

                className="grow text-white" placeholder="Username" />
                </label>
                   
                </div>
                

                {/* Password */}
                <div className=''>
                <label className=" bg-black border-rose-500 input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="text-white w-4 h-4 opacity-100"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input 
                type="password" 
                className="grow text-white" 
                placeholder='Password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                </label>
                </div>

                
                {/* Login Button */}

                <div>
                <button className="bg-black border-rose-500 text-white btn btn-outline btn-sm w-[30%] mt-4"
                    disabled ={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Login"}
                    </button>
                </div>

                {/* link to SignUp */}

                <Link to='/signup' className='text-sm text-white hover:text-rose-500 mt-2'>Don't have an account? Sign Up</Link>
                 
            </form>
        </div>
      
    </div>
    </div>
    </div>
  )
}

export default Login;
