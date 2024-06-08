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
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
        <div className='flex flex-col mb-4 w-full p-6 rounded-lg shadow-xl bg-black  shadow-rose-500  '>
            <h1 className='text-3xl font-semibold text-center text-white'>
                Signup!<br></br>
                <span className='text-rose-500'> {">>Staxxx<<<"}</span>
            </h1>
            <form onSubmit={handleSubmit}>

                {/* fullname */}
                <div>
                <label className="mb-4 mt-4 text-white bg-black border-rose-500 input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-100 text-white"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" className="grow text-white" placeholder="Full name" 
                value={inputs.fullName} 
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                    {/* <label className='label p-2'>
                        <span className='label-text text-white'>Fullname</span>
                    </label>
                    <input type='text' placeholder='Enter Fullname' className='input input-bordered w-full h-10' 
                       value={inputs.fullName} 
                       onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    /> */}
                    </label>
                </div>
               
                <div>
                <label className="  text-white bg-black border-rose-500 input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" className="grow text-white" placeholder="Username" 
                value={inputs.username} 
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
                />
                </label>
                    {/* <label className='label p-2'>
                        <span className='label-text text-white'>Username</span>
                    </label>
                    <input type='text' placeholder='Enter Username' className='input input-bordered w-full h-10'
                      value={inputs.username} 
                      onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    /> */}
                </div>

                {/* gender */}
                <GenderCheckbox onCheckboxChange={handleCheckboxChange}  selectedGender={inputs.gender}/>

                {/* Password */}
                <div>
                <label className="mb-4   text-white bg-black border-rose-500 input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="mb-4w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type='password' 
                         placeholder='Set Password' 
                         className='text-white' 
                         value={inputs.password} 
                         onChange={(e) => setInputs({...inputs, password: e.target.value})} />
                </label>
                    {/* <label className='label'>
                        <span className='text-base label-text text-white'>Password</span>
                    </label>
                    <input 
                         type='password' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                         value={inputs.password} 
                         onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    /> */}
                </div>
                
                {/* Confirm Password */}
                <div>
                <label className="input  text-white bg-black border-rose-500 input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input type='password' 
                         placeholder='Confirm Password' 
                         className='text-white' 
                         value={inputs.confirmPassword} 
                         onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} />
                </label>
                    {/* <label className='label'>
                        <span className='text-base label-text text-white'>Confirm Password</span>
                    </label>
                    <input 
                         type='password' 
                         placeholder='Enter Password' 
                         className='input input-bordered w-full h-10' 
                         value={inputs.confirmPassword} 
                         onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    /> */}
                </div>

                
                {/* Signup Button */}

                <div>
                <button className="text-white hover:bg-rose-500 btn btn-block border-rose-500 bg-black  btn-sm mt-5"
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