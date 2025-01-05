import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import bgLogin from '../assets/others/authentication.png'
import LoginImg from '../assets/others/authentication.gif'

const LoginPage = () => {
  return (
    <div style={{backgroundImage: `url(${bgLogin})`}} className="lg:flex justify-center items-center bg-cover pt-28 min-h-screen">
      <div>
        <img src={LoginImg} alt="" />
      </div>
      <div className='bg-white shadow-2xl p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-3xl text-center text-gray-800'>
          Bistro Boss Login
        </h2>
        <form>
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='input-bordered w-full input'
            />
          </div>
          <div className='form-control mb-6 w-full'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='input-bordered w-full input'
            />
          </div>
          <button className='w-full btn btn-primary'>Login</button>
        </form>
        <div className='flex flex-col space-y-4 mt-5'>
            <h1 className='font-bold text-center text-xl'>Log In With</h1>
          <button className='flex justify-center items-center w-full btn btn-outline'>
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
