import { Link } from "react-router-dom"
import signupImg from '../assets/others/authentication2.png' 
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"


const SignupPage = () => {
  const {createUser} = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

 
    createUser(email,password)
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are succesfully logged in.",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Somthing went wrong!!",
        showConfirmButton: false,
        timer: 1500
      });
    })

  }
  return (
    <div className="lg:flex justify-center items-center bg-[url('/path-to-your-image.jpg')] bg-cover min-h-screen">
      <div>
        <img src={signupImg} alt="" />
      </div>
      <div className='bg-white shadow-2xl p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-3xl text-center text-gray-800'>
          Bistro Boss Sign Up
        </h2>
        <form onSubmit={handleSignUp}>
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Name</span>
            </label>
            <input
              type='text'
              name="name"
              placeholder='Enter your name'
              className='input-bordered w-full input'
            />
          </div>
          <div className='form-control mb-4 w-full'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input
              type='email'
              name="email"
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
              name="password"
              placeholder='Create a password'
              className='input-bordered w-full input'
            />
          </div>
          <button className='w-full btn btn-primary'>Sign Up</button>
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
