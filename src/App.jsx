import './App.scss';
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Home from './components/home/Home';
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'

function App() {
  return (
    
    <div className="App">
    <Topbar />
    <div className="sections">
        <Home></Home>
        <Intro></Intro>
        <Contact />
        <Works />
        <Testimonials />
    </div>
    </div>
  );
}

export default App;

