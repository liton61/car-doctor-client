import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Stat from "../../components/Stat/Stat";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Stat></Stat>
        </div>
    );
};

export default Home;