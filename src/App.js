
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footerc';

//Import Router
import { Switch, Route } from 'react-router-dom';
// import pages
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Services from './components/pages/Services';
import Booktour from './components/pages/booktour';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div>
       <Navbar />
      
      <Switch>
         <Route exact path="/" component={Home} /> 
        <Route path="/contactus" component={Contacts} />
        <Route path="/services" component={Services} />
        <Route path="/booktour" component={Booktour} />
        <Route component={NotFoundPage} />
      
      </Switch>
      
     
       <Footer />
    </div>
  );
}

export default App;
