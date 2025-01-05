import { Link } from 'react-router-dom'

const Navber = () => {
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
        <Link to='order'>
          <span>Our Shop</span>
          <img
            className='w-10'
            src='https://i.ibb.co/mGWhvLp/151-1511569-cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
            alt=''
          />
        </Link>
      </li>
      <li>
        <Link to='login'>
         <img className='rounded-full w-16' src='https://i.ibb.co/19jrmD9/profile.png' alt='' />
        </Link>
      </li>
    </>
  )
  return (
    <div className='top-0 z-10 fixed inset-x-0 items-center bg-black bg-opacity-30 mx-auto py-0 w-11/12 text-white navbar'>
      <div className='w-5/12 navbar-start'>
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

      <div className='items-center w-7/12 navbar-end'>
        <ul className='items-center mx-0 font-bold text-lg menu menu-horizontal'>{link}</ul>
      </div>
    </div>
  )
}

export default Navber
