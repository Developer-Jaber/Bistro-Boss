import Banner from "../Components/Banner";
import CategorySlides from "../Components/CategorySlides";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <CategorySlides></CategorySlides>
            </section>
        </div>
    );
};

export default Home;