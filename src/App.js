
import './App.css';
import { Banner } from './Components/Banner';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Skills  from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import { useEffect } from 'react';
import { Footer } from './Components/Footer';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
        const cursor = document.querySelector(".cursor");
        const cursor2 = document.querySelector(".cursor2");
        cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
        document.removeEventListener("mousemove", handleMouseMove);
    };
}, []);
  return (
    <>
   <NavBar/>
   <Banner/>
    <Skills/>
    <Project/>
    
    <Contact/>
    
    <Footer/>
    <div className="cursor"></div>
            <div className="cursor2"></div>
    </>
  );
}

export default App;
