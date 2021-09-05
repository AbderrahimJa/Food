import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Head from './Head';
import Section from './Section';
import Speciality from './speciality';
import Menu from './menu';
import Steps from './steps';
import Galery from './gallery';
import Review from './review';
import Order from './order';
import Footer from './footer';
import i from './images/loader.gif';
import Connexion from './Connexion';
import AdminSpace from './adminSpace';
import OrderSpace from './ordersSpace';
import Head2 from './head2';

function App() {
  function loader(){
    // document.getElementsByClassName('loader-container').classList.add('fade-out');
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut();
  return (
    <Router>
      <div className="App">
        <Head></Head>
        {/* <Head2></Head2> */}
        <Switch>
          <Route exact path="/">
            <Section></Section>
            <Speciality></Speciality>
            <Steps></Steps>
            <Galery></Galery>
            {/* <Review></Review> */}
            <Order></Order>
            <Footer></Footer>
          </Route>
          <Route path="/Menu/">
            <Menu></Menu>
          </Route>
          {/* <Route path="/Connexion/">
            <Connexion></Connexion>
          </Route> */}
          <Route exact path="/Connexion/">
            {/* <Router> */}
              {/* <Switch> */}
                {/* <Route exact path="/Connexion"> */}
                  <Connexion></Connexion>
                {/* </Route> */}
                {/* <Route path="/Connexion/Space/">
                  <Head2></Head2>
                  <Router>
                    <Switch>
                      <Route exact path="/Connexion/Space/Menu">
                        <AdminSpace></AdminSpace>
                      </Route>
                      <Route exact path="/Connexion/Space/Orders">
                        <OrderSpace></OrderSpace>
                      </Route>
                    </Switch>
                  </Router>
                </Route>
              </Switch>
            </Router> */}
          </Route>
          <Route path="/Space">
            <Head2></Head2>
            {/* <Router> */}
              <Switch>
                <Route path="/Space/Menu">
                  <AdminSpace></AdminSpace>
                </Route>
                <Route path="/Space/Orders">
                  <OrderSpace></OrderSpace>
                </Route>
              </Switch>
            {/* </Router> */}
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
        <div className="loader-container">
          <img src={i} alt="" />
        </div>
        {/* <header className="App-header">
        </header> */}
      </div>
    </Router>
  );
}

export default App;
