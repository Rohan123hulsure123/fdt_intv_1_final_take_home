// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import AreaOfPractise from './components/AreaOfPractise/AreaOfPractise';
import Footer from './components/Footer/Footer';
import HomeSection from './components/HomeSection/HomeSection';
import Newsletter from './components/Newsletter/Newsletter';
import OurTeam from './components/OurTeam/OurTeam';
import Testimonials from './components/Testimonials/Testimonials';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutUs />
      <WhyChooseUs />
      <AreaOfPractise />
      <Testimonials />
      <OurTeam />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
