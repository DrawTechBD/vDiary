import React from 'react';
import Navbar from "./layouts/components/Navbar";
import Sidebar from './layouts/components/Sidebar';
import Footer from './layouts/components/Footer';
// import Breadcumb from "./layouts/components/Breadcumb";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movies from "./layouts/pages/Movies";
import Songs from "./layouts/pages/Songs";
import MovieView from "./layouts/pages/MovieView";


function App() {
  return (
      <Router>
          <div className="wrapper">
              <Navbar/>
              <Sidebar/>
              <div className="content-wrapper">
                  {/*<Breadcumb/>*/}
                  <section className="content">
                      <Switch>
                          <Route exact path="/movie" component={Movies}/>
                          <Route path="/movie/:id" component={MovieView}/>
                          <Route path="/songs" component={Songs}/>
                      </Switch>
                  </section>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
