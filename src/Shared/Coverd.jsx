import { Parallax } from 'react-parallax'

const Coverd = ({ bg, heding, subHeding }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
    //   bgImage={require('../assets/menu/banner3.jpg')}
      bgImageAlt='the dog'
      strength={-200}
    >
      <div
        className='h-[550px] cinzel-font hero'
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <div className='bg-opacity-60 hero-overlay'></div>
        <div className='text-center text-white hero-content'>
          <div className='bg-black bg-opacity-35 px-72 py-32'>
            <div className='max-w-2xl'>
              <h1 className='mb-3 font-bold text-5xl'>{heding}</h1>
              <p className='text-xl'>{subHeding}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Coverd
