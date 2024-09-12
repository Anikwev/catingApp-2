import React, { useState } from 'react'
import Lottie from "lottie-react";
import { IoEyeOff } from "react-icons/io5";
import loginani from '../../../public/animation/Animation - [3]1725299410150.json'
import { IoMdEye } from "react-icons/io";
import { Bounce , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { Link } from 'react-router-dom';
 

const Login = () => {
    // =================== variable part start
    const [email , setEmail]                            = useState('')
    const [emailError , setEmailError]                  = useState('')
    const [password , setPassword]                      = useState('')
    const [passwordError , setPasswrodError]            = useState('')
    const [show , setShow]                              = useState(false)

    // ================= functions part  start
    const handelEmail =  (e)=>{
            setEmail(e.target.value)
            setEmailError('')
    }
    const handelPass  = (e)=>{
        setPassword(e.target.value)
        setPasswrodError('')
    }
    // ================= main submit funtion 
    const handelSubmit = (e)=>{
        e.preventDefault()

        if(!email){
                setEmailError('enter your email')
        }
        if(!password){
            setPasswrodError('Enater your password')
        }
        else{
            
            toast.success('🦄 Login Successfull', { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        }
    }
    //===========show fanshon
    const handelShow = ()=>{
        setShow(!show)

    }




    
  return (
    <>
        <div className='nana w-full h-screen justify-center  flex gap-40 items-center'>
            <div className="animation w-[300px]">
                <Lottie animationData={loginani} />
            </div>
            <div className='main_from'>
                    <h1 className='loginHead'>Login</h1>
                    <form onSubmit={handelSubmit} className='main_form'>
                        <label>Email</label>
                        <br />
                        <input onChange={handelEmail} placeholder='Enter your email'  type="email" />
                        <br />
                        <p className='error'>{emailError }</p>
                        <label>Password</label>
                        <br />
                        <div className='passDiv'>
                           {
                            show?<IoMdEye onClick={handelShow} className='eyeIcon'/>
                               :
                           <IoEyeOff onClick={handelShow} className='eyeIcon'/>
                           }
                            <input onChange={handelPass} placeholder='Enter your Password'  type={show? 'text' : 'password'}/>
                        </div>
                        <p className='error'>{passwordError}</p>
                        <button type='submit' className='loginButton'>Login</button>
                       <Link to= '/Register' className=' text-lg font-normal text-black'>Dont Have An Account ?<span className='font-bold text-blue-500'>SignUp</span></Link>
                    </form>
            </div>
        </div>
    </>
  )
}

export default Login