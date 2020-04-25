import React from 'react';
import Navbar from "./layouts/components/Navbar";
import Sidebar from './layouts/components/Sidebar';
import Footer from './layouts/components/Footer';
// import Breadcumb from "./layouts/components/Breadcumb";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movies from "./layouts/pages/Movies";
import Songs from "./layouts/pages/Songs";


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
                          <Route path="/movies">
                              <Movies/>
                          </Route>
                          <Route path="/songs">
                              <Songs/>
                          </Route>
                      </Switch>
                  </section>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
