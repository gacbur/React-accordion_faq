import './App.css';
import Accordion from './components/Accordion'

const App = () => {

  return (
    <div className="app">
      <div className="box-cnt">
        <div className="ilustration-cnt">
          <div className="ilustration-woman">
            <div className="ilustration-cube"></div>
          </div>
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