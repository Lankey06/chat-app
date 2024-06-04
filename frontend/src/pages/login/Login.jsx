import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Login to
                <span className='text-blue-400'> CONVO</span>
            </h1>
            <form>

                {/* Username */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10' />
                </div>
                

                {/* Password */}
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input 
                         type='text' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                    />
                </div>

                
                {/* Login Button */}

                <div>
                <button className="btn btn-block btn-sm mt-5">Login</button>
                </div>

                {/* link to SignUp */}

                <a href='#' className='text-sm hover:text-white  mt-2'>Don't have an account? Sign Up</a>
                 
            </form>
        </div>
      
    </div>
  )
}

export default Login;
