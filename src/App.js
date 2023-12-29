// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import HomeSection from './components/HomeSection/HomeSection';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutUs />
      <WhyChooseUs />
    </div>
  );
}

export default App;
