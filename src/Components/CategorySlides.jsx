import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import '../css/swiper.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'

// impoted img
import slid1 from '../assets/home/slide1.jpg'
import slid2 from '../assets/home/slide2.jpg'
import slid3 from '../assets/home/slide3.jpg'
import slid4 from '../assets/home/slide4.jpg'
import slid5 from '../assets/home/slide5.jpg'

const CategorySlides = () => {
  return (
    <div className='mx-auto py-14 w-9/12'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className='relative'>
          <img src={slid1} alt='' />
          <h1 className='bottom-20 absolute font-semibold text-2xl text-white'>SALAD</h1>
        </SwiperSlide>
        <SwiperSlide >
          <img src={slid2} alt='' />
          <h1 className='bottom-20 absolute font-semibold text-2xl text-white'>PI</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slid3} alt='' />
          <h1 className='bottom-20 absolute font-semibold text-2xl text-white'>SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slid4} alt='' />
          <h1 className='bottom-20 absolute font-semibold text-2xl text-white'>SALAD</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src={slid5} alt='' />
          <h1 className='bottom-20 absolute font-semibold text-2xl text-white'>SALAD</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CategorySlides
