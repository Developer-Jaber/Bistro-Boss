import Banner from '../Components/Banner'
import CategorySlides from '../Components/CategorySlides'
import ChefService from '../Components/ChefService'
import FromOurMenu from '../Components/FromOurMenu'
import SectionTitle from '../Components/SectionTitle'

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
    </div>
  )
}

export default Home
