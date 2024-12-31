import Banner from '../Components/Banner'
import CallUs from '../Components/CallUs'
import CategorySlides from '../Components/CategorySlides'
import ChefRecomands from '../Components/ChefRecomands'
import ChefService from '../Components/ChefService'
import Fetured from '../Components/Fetured'
import FromOurMenu from '../Components/FromOurMenu'
import SectionTitle from '../Components/SectionTitle'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <SectionTitle
          heading={'---From 11:00am to 10:00pm---'}
          subHeading={'ORDER ONLINE'}
        ></SectionTitle>
        <CategorySlides></CategorySlides>
      </section>
      <section>
        <ChefService></ChefService>
      </section>
      <section>
        <SectionTitle
          heading={'---Check it out---'}
          subHeading={'FROM OUR MENU'}
        ></SectionTitle>
        <FromOurMenu></FromOurMenu>
      </section>
      <section>
        <CallUs></CallUs>
      </section>
      <section>
      <SectionTitle
          heading={'---Should Try---'}
          subHeading={'CHEF RECOMMENDS'}
        ></SectionTitle>
        <ChefRecomands></ChefRecomands>
      </section>
      <section>
        <Fetured></Fetured>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
    </div>
  )
}

export default Home
