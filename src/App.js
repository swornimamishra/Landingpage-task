import './App.css';
import Cards from './components/Cards';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
function App() {
  return (
    <>
    <div >
      <Navbar/>
      <Header/>
      <Section/>
      <Cards/>
      <Feedback/>
      <Header style={{ padding: '80px',height: '324px',  fontSize:'2rem' }} text="Ready to get started? Sign up now!"/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
