import Event from "../Event/Event";
import Banner from "../Header/Banner";
import SpecialTeam from "../SpecialTeam/SpecialTeam";
import Service from "./Service";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Event></Event>
            <SpecialTeam></SpecialTeam>
        </div>
    );
};

export default Home;