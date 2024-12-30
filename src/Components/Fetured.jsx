import SectionTitle from './SectionTitle'
import feturedImg from '../assets/home/featured.jpg'

const Fetured = () => {
  return (
    <section
      style={{ backgroundImage: `url(${feturedImg})` }}
      className='bg-fixed mx-auto w-9/12 text-white'
    >
      <div className='bg-black bg-opacity-30 py-14'>
        <SectionTitle
          heading={'---Check it out---'}
          subHeading={'FROM OUR MENU'}
        ></SectionTitle>
        <div className='flex items-center mx-auto w-9/12'>
          <img src={feturedImg} className='w-96 h-56 object-cover' alt='' />
          <div className='p-16'>
            <p>
              March 20, 2023 <br /> WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <button className='border-0 mt-3 p-3 border-b-4 rounded-md text-white btn-outline'>Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fetured
