// import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import './styles/global.css';

function App() {
  return (
    <>
      <div className="container-body-wrapper">
        
        <Header />
        <Home />
        {/* <About /> */}
        <Skills />
      </div>
    </>
  );
}

export default App;
