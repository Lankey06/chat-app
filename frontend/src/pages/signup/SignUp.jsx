import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Signup to
                <span className='text-blue-400'> CONVO</span>
            </h1>
            <form>

                {/* fullname */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Fullname</span>
                    </label>
                    <input type='text' placeholder='Enter Fullname' className='input input-bordered w-full h-10' />
                </div>
                {/* Username */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10' />
                </div>
                
                {/* email */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Email</span>
                    </label>
                    <input type='text' placeholder='@vishnu.edu.in' className='input input-bordered w-full h-10' />
                </div>

                {/* gender */}
                <GenderCheckbox/>

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
                
                {/* Confirm Password */}
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input 
                         type='text' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                    />
                </div>

                
                {/* Signup Button */}

                <div>
                <button className="btn btn-block btn-sm mt-5">Sign up</button>
                </div>

                {/* link to SignUp */}

                <a href='#' className='text-sm hover:text-white  mt-2'>Alreay have an account? Login</a>
                 
            </form>
        </div>
      
    </div>
  )
}

export default SignUp