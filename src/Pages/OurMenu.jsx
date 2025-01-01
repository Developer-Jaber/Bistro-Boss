import React from 'react'
import { Helmet } from 'react-helmet-async'
import Coverd from '../Shared/Coverd'
import useMenu from '../Hooks/useMenu'

// needed img
import banner1 from '../assets/menu/banner3.jpg'

const OurMenu = () => {
  const [menu] = useMenu();
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <section>
          <Coverd bg={banner1} heding={'OUR MENU'} subHeding={'Would you like to try a dish?'}></Coverd>
      </section>
    </div>
  )
}

export default OurMenu
