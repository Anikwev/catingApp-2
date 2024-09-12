import Lottie from "lottie-react";
 
import { IoEyeOff } from "react-icons/io5";
import loginani from '../../../public/animation/Animation - [3]1725299410150.json'
import { IoMdEye } from "react-icons/io";
import { Bounce, ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './Register.css'
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Register = () => {
    // =================== variable part start
    const [usarName , setUsarName ]                     = useState('')
    const [usarNameError , setUsarNameError ]           = useState('')
    const [email , setEmail]                            = useState('')
    const [emailError , setEmailError]                  = useState('')
    const [password , setPassword]                      = useState('')
    const [passwordError , setPasswrodError]            = useState('')
    const [show , setShow]                              = useState(false)


    // =================== fierbase  part start
    const auth = getAuth();





    // ================= functions part  start
    const handelEmail =  (e)=>{
            setEmail(e.target.value)
            setEmailError('') }

    const handelPass  = (e)=>{
        setPassword(e.target.value)
        setPasswrodError('') }

        const handelusar  = (e)=>{
            setUsarName(e.target.value)
            setUsarNameError('')
        }

    // ================= main submit funtion 
    const handelSubmit = (e)=>{
        e.preventDefault()
        if(!usarName){
            setUsarNameError('enter your usar Name')
        }
        if(!email){
                setEmailError('enter your email')
        }
        if(!password){
            setPasswrodError('Enater your password')
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               console.log('done') 
            })
            .catch((error) => {
              console.log('error')
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
                <h1 className='loginHead'>Register</h1>
                <form onSubmit={handelSubmit} className='main_form'>
                    <label>usar Name</label>
                    <br />
                    <input onChange={handelusar} placeholder='Enter your usar Name' type="text" />
                    <p className='error'>{usarNameError }</p>
                    
                    <label>Email</label>
                    <br />
                    <input onChange={handelEmail} placeholder='Enter your email' type="email" />
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
                      <p className='error'>{passwordError}</p>
                    </div>
                       
                    <button type='submit' className='loginButton'>Register</button>
                    
                   <Link to= '/' className=' text-lg font-normal text-black'>Alraday Have An Account ?<span className='font-bold text-blue-500'>Login</span></Link>
                </form>
        </div>
    </div>
</>
  )
}

export default Register