import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import { Home } from './components/Home';
// import Login from './components/Login';
import Navbar from './components/Navbar';
// import Workspace from './components/Workspace';

function App() {
  return (
    <>
    <div className='left-0 right-0'>
    <Navbar/>
    <Home id="home"/>
    <About id="about"/>
    <Contact id="contact"/>
    {/* <Login/> */}
    {/* <Workspace/> */}
    </div>
    </>
  );
}

export default App;
