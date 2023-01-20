import './App.css';
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import ProjectDisplay from './Pages/Projects/ProjectDisplay';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/projects/:id' element={<ProjectDisplay/>} />
        <Route path='/experience' element={<Experience/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
