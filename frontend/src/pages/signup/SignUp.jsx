import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { useState} from 'react'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

    const [ inputs, setInputs ] = useState({
        fullName: '',
        username: '',
        gender: '',
        password: '',
        confirmPassword: ''
    })

    const { loading, signup} = useSignup();
    
    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(inputs);
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400'>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Signup to
                <span className='text-blue-400'> CONVO</span>
            </h1>
            <form onSubmit={handleSubmit}>

                {/* fullname */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Fullname</span>
                    </label>
                    <input type='text' placeholder='Enter Fullname' className='input input-bordered w-full h-10' 
                       value={inputs.fullName} 
                       onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>
                {/* Username */}
                <div>
                    <label className='label p-2'>
                        <span className='label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10'
                      value={inputs.username} 
                      onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>

                {/* gender */}
                <GenderCheckbox onCheckboxChange={handleCheckboxChange}  selectedGender={inputs.gender}/>

                {/* Password */}
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input 
                         type='password' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                         value={inputs.password} 
                         onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>
                
                {/* Confirm Password */}
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input 
                         type='password' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                         value={inputs.confirmPassword} 
                         onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                
                {/* Signup Button */}

                <div>
                <button className="btn btn-block btn-sm mt-5"
                   disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Signup"}
                  
                </button>
                </div>

                {/* link to Login */}

                <Link to={'/login'} className='text-sm hover:text-white  mt-2'>Alreay have an account? Login</Link>
                 
            </form>
        </div>
      
    </div>
  )
}

export default SignUp;