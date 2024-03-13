import Achievements from "./Components/Achievements";
import Calendar from "./Components/Calendar";
import Clients from "./Components/Clients";
import Community from "./Components/Community";
import CommunityUpdates from "./Components/CommunityUpdates";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavBar from "./Components/NavBar";
import Unlock from "./Components/Unlock";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calendar />
      <Customers />
      <CommunityUpdates />
      <Footer />
    </>
  );
}

export default App;
