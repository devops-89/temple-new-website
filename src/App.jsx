import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Slider from "./Components/Slider.jsx";
import About from "./Components/About";
import Programs from "./Components/Programs";
import Events from "./Components/Events";
import EventsPage from "./Components/EventsPage";
import Donations from "./Components/Donations.jsx";
import Footer from "./Components/Footer";
import ContactsPage from "./Pages/ContactsPage.jsx";
import NewsPage from "./Pages/NewsPage.jsx";
import DonationsPage from "./Pages/DonationsPage.jsx";
import EventsInnerPage from "./Pages/EventsInnerPage.jsx";
// import ShopPage from "./Pages/ShopPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import FeaturesPage from "./Pages/FeaturesPage.jsx"

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <About />
              <Programs />
              <Events />
              <EventsPage />
              <Donations />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/featuresPage" element={<FeaturesPage />} />
        {/* <Route path="/shopPage" element={<ShopPage />} /> */}
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donationsPage" element={<DonationsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/eventsInnerPage" element={<EventsInnerPage/>}/>
        <Route path="/aboutPage" element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;