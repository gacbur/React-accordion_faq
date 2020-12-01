import './App.css';
import Accordion from './components/Accordion'
import ilustrationwoman from './images/ilustrationwoman.svg'
import illustrationboxdesktop from './images/illustrationboxdesktop.svg'

const App = () => {

  return (
    <div className="app">
      <div className="box-cnt">
        <div className="ilustration-cnt">
          <img className="ilustration-woman" src={ilustrationwoman} alt="woman-img"></img>
          <img className="ilustration-cube" src={illustrationboxdesktop} alt="ilustration-cube" />
        </div>
        <div className="faq">
          <h1>FAQ</h1>
          <Accordion />
        </div>
      </div>
    </div >
  );
}

export default App;