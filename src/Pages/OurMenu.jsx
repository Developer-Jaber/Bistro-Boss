import React from 'react'
import { Helmet } from 'react-helmet-async'
import Coverd from '../Shared/Coverd'
import useMenu from '../Hooks/useMenu'

// needed img
import banner1 from '../assets/menu/banner3.jpg'
import banner2 from '../assets/home/chef-service.jpg'

// components
import SectionTitle from '../Components/SectionTitle'
import Menu from '../Shared/Menu'

const OurMenu = () => {
  const [menu] = useMenu()
  const todaysOffer = menu.filter(item => item.category === 'offered')
  const dessert = menu.filter(item => item.category === 'dessert')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* At the top of this page cover section */}
      <section>
        <Coverd
          bg={banner1}
          heding={'OUR MENU'}
          subHeding={'Would you like to try a dish?'}
        ></Coverd>
      </section>

      {/* secoend section of this page-- today's offer */}
      <section className='my-20'>
        <SectionTitle
          heading="---Don't miss---"
          subHeading="TODAY'S OFFER"
        ></SectionTitle>
        <div className='gap-7 grid grid-cols-2 mx-auto my-10 w-8/12'>
          {todaysOffer.map(item => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className="border-0 border-b-4 border-black btn">ORDER YOUR FAVOURITE FOOD</div>
        </div>
      </section>

      {/* third section of this page-- a cover */}
      <section>
        <Coverd
          bg={banner2}
          heding='DESSERTS'
          subHeding='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'
        ></Coverd>
      </section>

      {/* fourth section of this page-- food */}
      <section className='my-20'>
        <div className='gap-7 grid grid-cols-2 mx-auto my-10 w-8/12'>
          {dessert.map(item => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className="border-0 border-b-4 border-black btn">ORDER YOUR FAVOURITE FOOD</div>
        </div>
      </section>

      {/* fith section of this page-- a cover */}
      <section>
        <Coverd
          bg={banner2}
          heding='PIZZA'
          subHeding='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'
        ></Coverd>
      </section>

      {/* sixth section of this page-- food */}
      <section className='my-20'>
        <div className='gap-7 grid grid-cols-2 mx-auto my-10 w-8/12'>
          {pizza.map(item => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className="border-0 border-b-4 border-black btn">ORDER YOUR FAVOURITE FOOD</div>
        </div>
      </section>

      {/* seventh section of this page-- a cover */}
      <section>
        <Coverd
          bg={banner2}
          heding='SALADS'
          subHeding='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'
        ></Coverd>
      </section>
      
      {/* eight section of this page-- food */}
      <section className='my-20'>
        <div className='gap-7 grid grid-cols-2 mx-auto my-10 w-8/12'>
          {salad.map(item => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className="border-0 border-b-4 border-black btn">ORDER YOUR FAVOURITE FOOD</div>
        </div>
      </section>

      {/* ningth section of this page-- a cover */}
      <section>
        <Coverd
          bg={banner2}
          heding='SOUPS'
          subHeding='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer.'
        ></Coverd>
      </section>

      {/* tenth section of this page-- food */}
      <section className='my-20'>
        <div className='gap-7 grid grid-cols-2 mx-auto my-10 w-8/12'>
          {soup.map(item => (
            <Menu key={item._id} item={item}></Menu>
          ))}
        </div>
        <div className='flex justify-center'>
          <div className="border-0 border-b-4 border-black btn">ORDER YOUR FAVOURITE FOOD</div>
        </div>
      </section>
    </div>
  )
}

export default OurMenu
