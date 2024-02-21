import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { Home } from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Work from './components/Work';


function App() {
  return (
    <>
    <div className='left-0 right-0'>
    {/* <Navbar/>
    <Home id="home"/>
    <About id="about"/>
    <Contact id="contact"/> */}
    {/* <Login/> */}
    {/* <Workspace/> */}
    <Work/>
    </div>
    </>
  );
}

export default App;
