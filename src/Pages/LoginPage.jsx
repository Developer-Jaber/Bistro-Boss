import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bgLogin from '../assets/others/authentication.png'
import LoginImg from '../assets/others/authentication.gif'
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from 'react-simple-captcha'
import { AuthContext } from '../Provider/AuthProvider'

const LoginPage = () => {
  const [disabled,setDisabled] = useState(true)
    const captchaRef = useRef(null)
    useEffect(()=>{
        loadCaptchaEnginge(5); 
    },[])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
          setDisabled(false)
        }else{
          setDisabled(true)
        }
    }

    const {popupGoogle} = useContext(AuthContext)

    const handleGooleLogIn = () =>{
      popupGoogle()
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  return (
    <div
      style={{ backgroundImage: `url(${bgLogin})` }}
      className='lg:flex justify-center items-center bg-cover pt-28 min-h-screen'
    >
      <div>
        <img src={LoginImg} alt='' />
      </div>
      <div className='bg-white shadow-2xl p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-3xl text-center text-gray-800'>
          Bistro Boss Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              name='email'
              className='input-bordered w-full input'
            />
          </div>
          <div className='form-control mb-6 w-full'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              className='input-bordered w-full input'
            />
          </div>
          <div className='form-control mb-6 w-full'>
            <label className='label'>
              <LoadCanvasTemplate />
            </label>
            <input type='text' ref={captchaRef} name='captcha' className='input-bordered w-full input' />
            <button onClick={handleValidateCaptcha} className='border-2 btn btn-sm'>veryfy</button>
          </div>
          <button disabled={disabled} className='w-full btn btn-primary'>Login</button>
        </form>
        <div className='flex flex-col space-y-4 mt-5'>
          <h1 className='font-bold text-center text-xl'>Log In With</h1>
          <button onClick={handleGooleLogIn} className='flex justify-center items-center w-full btn btn-outline'>
            <FaGoogle className='mr-2' /> Login with Google
          </button>
          <button className='flex justify-center items-center w-full btn btn-outline'>
            <FaFacebook className='mr-2' /> Login with Facebook
          </button>
          <button className='flex justify-center items-center w-full btn btn-outline'>
            <FaGithub className='mr-2' /> Login with Facebook
          </button>
        </div>
        <p className='mt-4 text-center text-gray-600'>
          Don't have an account?{' '}
          <Link to='/signup' className='text-blue-500'>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
