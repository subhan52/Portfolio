import './App.css';
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Home from './components/home/Home';

import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    
    <div className="App">
    <Topbar></Topbar>
    <Home></Home>
    <Intro></Intro>
    <Contact />
    <Testimonials />
    </div>
  );
}

export default App;

