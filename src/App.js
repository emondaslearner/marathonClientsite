import './App.css';
import AboutMarathon from './components/AboutMarathon';
import Footer from './components/Footer';
import Header from './components/Header';
import Offers from './components/Offers';
import ParticipateBySize from './components/ParticipateBySize';
import Project from './components/Project';

function App() {
  return (
    <>
      <Header />
      <AboutMarathon />
      <Offers />
      <ParticipateBySize />
      <Project />
      <Footer />
    </>
  );
}

export default App;
