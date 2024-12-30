import Banner from "../Components/Banner";
import CategorySlides from "../Components/CategorySlides";
import ChefService from "../Components/ChefService";
import SectionTitle from "../Components/SectionTitle";

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
        </div>
    );
};

export default Home;