import Banner from "../Banner/Banner";
import ClientSection from "../ClientSection/ClientSection";
import Services from "../Services/Services";
import TabSection from "../TabSection/TabSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <TabSection />
      <ClientSection />
    </div>
  );
};

export default Home;
