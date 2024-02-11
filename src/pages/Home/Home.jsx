import AboutUs from "../../components/AboutUs/AboutUs";
import Banner from "../../components/Banner/Banner";
import Products from "../../components/Products/Products";
import Services from "../../components/Services/Services";
import Stat from "../../components/Stat/Stat";
import Team from "../../components/Team/Team";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Stat></Stat>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;