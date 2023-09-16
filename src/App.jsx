import  Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Headsets from './pages/Headsets.jsx';
import { headsets } from './data';
import Headsetinfo from './pages/Headsetinfo.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Route path="/" exact component={Home}/>
      <Route path="/headsets" exact render={() => <Headsets headsets={headsets}/>} />
      <Route path="/headsets/1" render={() => <Headsetinfo headsets={headsets}/>}/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
