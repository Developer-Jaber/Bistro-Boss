import SectionTitle from './SectionTitle'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import '../css/testimonials.css'
// import required modules
import { Navigation } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [testiminials, setTestimonials] = useState([])
  useEffect(() => {
    fetch('/review.json')
      .then(res => res.json())
      .then(data => {
        setTestimonials(data)
      })
  }, [])
  return (
    <section className='p-32'>
      <SectionTitle
        heading={'---What Our Clients Say---'}
        subHeading={'TESTIMONIALS'}
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {testiminials.map(testimonial => (
            <SwiperSlide key={testimonial._id}>
              <div className='px-24'>
                <div className='flex justify-center items-center my-6'>
                  {Array.from({ length: 5 }, (_, i) =>
                    i < testimonial.rating ? (
                      <AiFillStar key={i} className='text-3xl text-yellow-500' />
                    ) : (
                      <AiOutlineStar key={i} className='text-3xl text-gray-400' />
                    )
                  )}
                </div>
                <span className='flex justify-center text-5xl'>
                  <FaQuoteLeft></FaQuoteLeft>
                </span>
                <p className='my-3 text-gray-700 text-sm'>{testimonial.details}</p>
                <h1 className='text-xl text-yellow-500'>{testimonial.name}</h1>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
