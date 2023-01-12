import MainSwiper from "./components/MainSwiper";
import Nav from "./components/Nav";
import TabSection from "./components/TabSection";
import Service from "./components/Service";
import MultiPopup from "./components/MultiPopup";
import Youtube from "./components/Youtube";
import MockUp from "./components/MockUp";
import Board from "./components/Board";
import MapSection from "./components/MapSection";
import ContactUs from "./components/ContactUs";
import GlobalStyle from "./assets/GlobalStyle";
import Footer from "./components/Footer";
import GoUp from "./components/GoUp";
import "./assets/font.css"

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <MainSwiper />
      <TabSection />
      <Service />
      <MultiPopup />
      <Youtube />
      <MockUp />
      <Board />
      <MapSection />
      <ContactUs />
      <Footer />
      <GoUp />
    </>
  );
}

export default App;