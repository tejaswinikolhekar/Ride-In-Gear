
import './App.css';
import HomePage from './Component/HomePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './Component/LoginPage';
import Csignup from './Component/Csignup';
import Osignup from './Component/Osignup';
import Customerhome from './Component/Customerhome';
import Ownerhome from './Component/Ownerhome';
import Bookinghome from './Component/Bookinghome';
import SavePayment from './Component/SavePayment';
import Adminhome from './Component/Adminhome';
import ServiceCar from './Component/ServiceCar';
import ServiceBike from './Component/ServiceBike';

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" component={HomePage} exact/>
      
      <Route path="/login" component={LoginPage} />
      <Route path="/creg" component={Csignup} />
      <Route path="/oreg" component={Osignup} />
      <Route path="/customerhome" component={Customerhome}/>
      <Route path="/ownerhome" component={Ownerhome}/>
      <Route path="/savebooking" component={Bookinghome} />
      <Route path="/savepayment" component={SavePayment} />
      <Route path="/adminhome" component={Adminhome} />
      <Route path="/servicecar" component={ServiceCar} />
      <Route path="/servicebike" component={ServiceBike} />
      </Router>
    </div>
  );
}

export default App;
