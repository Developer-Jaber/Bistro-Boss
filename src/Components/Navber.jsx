import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import { FaShoppingCart } from 'react-icons/fa'
import Swal from 'sweetalert2'

const Navber = () => {
  const { user, logoutUser } = useContext(AuthContext)
  const handleLogout = () => {
    logoutUser()
    .then(()=>{
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your are succesfully logged Out.",
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(()=>{
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Somthing went wrong!!",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
  const link = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>CONTACT us</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to='our-menu'>Our Menu</Link>
      </li>
      <li>
        <Link to='order'>Our Shop</Link>
      </li>
      <li>
        <Link to='/'>
          <button className='flex gap-3'>
            <FaShoppingCart className='text-3xl'></FaShoppingCart>
            <div className='p-2 text-2xl badge badge-primary'>+0</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to='login'>
          {user && user ? (
            <img className='rounded-full w-16' src={user?.photoURL} alt='' />
          ) : (
            <img
              className='rounded-full w-16'
              src='https://i.ibb.co/19jrmD9/profile.png'
              alt=''
            />
          )}
        </Link>
      </li>
      <li>
        {user && (
          <button onClick={handleLogout} className='btn btn-primary'>
            LogOut
          </button>
        )}
      </li>
    </>
  )
  return (
    <div className='top-0 z-10 fixed inset-x-0 items-center bg-black bg-opacity-30 mx-auto py-0 w-11/12 text-white navbar'>
      <div className='w-4/12 navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='lg:hidden btn btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 font-bold dropdown-content menu menu-sm'
          >
            {link}
          </ul>
        </div>
        <a className='block text-2xl cinzel-font'>
          <div>BISTRO BOSS</div>
          <div>Restaurant</div>
        </a>
      </div>

      <div className='items-center w-8/12 navbar-end'>
        <ul className='items-center mx-0 font-bold text-lg menu menu-horizontal'>
          {link}
        </ul>
      </div>
    </div>
  )
}

export default Navber
