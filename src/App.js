import './App.css';
import Accordion from './components/Accordion'

const App = () => {

  return (
    <div className="app">
      <div className="box-cnt">
        <div className="ilustration-cube"></div>
        <div className="ilustration-cnt">
          <div className="ilustration-woman"></div>
        </div>
        <div className="faq">
          <h1>FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}

export default App;