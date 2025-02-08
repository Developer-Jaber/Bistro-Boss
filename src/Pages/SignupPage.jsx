import { Link, useLocation, useNavigate } from 'react-router-dom'
import signupImg from '../assets/others/authentication2.png'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'

const SignupPage = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(() => {
        // const loggedUser = result.user;
        updateUserProfile(data.displayName, data.photoURL)
        .then(()=>{
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your are succesfully Sign Up.',
            showConfirmButton: false,
            timer: 1500
          });
          reset();
        })
        navigate(from, { replace: true })
      })
      .catch(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Somthing went wrong!!',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }

  return (
    <div className="lg:flex justify-center items-center bg-[url('/path-to-your-image.jpg')] bg-cover min-h-screen">
      <div>
        <img src={signupImg} alt='' />
      </div>
      <div className='bg-white shadow-2xl p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-3xl text-center text-gray-800'>
          Bistro Boss Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* for name */}
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='displayName'
              {...register('displayName', { required: true })}
              className='input-bordered w-full input'
            />
          </div>
          {/* for photourl */}
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>PhotoURL</span>
            </label>
            <input
              type='photoURL'
              {...register('photoURL', { required: true })}
              className='input-bordered w-full input'
            />
          </div>
          {/* for email */}
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              {...register('email', { required: true })}
              className='input-bordered w-full input'
            />
          </div>
          {/* for password */}
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='password'
              {...register('password', { required: true })}
              className='input-bordered w-full input'
            />
          </div>
          <button type='submit' className='w-full btn btn-primary'>
            Sign Up
          </button>
        </form>
        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignupPage
