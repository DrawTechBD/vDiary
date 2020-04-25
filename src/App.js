import React from 'react';
import Navbar from "./layouts/components/Navbar";
import Sidebar from './layouts/components/Sidebar';
import Footer from './layouts/components/Footer';
import Breadcumb from "./layouts/components/Breadcumb";

function App() {
  return (
      <div className="wrapper">
        <Navbar/>
        <Sidebar/>
        <div className="content-wrapper">
            <Breadcumb/>
            <section className="content">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Title</h3>

                        <div className="card-tools">
                            <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                    data-toggle="tooltip" title="Collapse">
                                <i className="fas fa-minus"/></button>
                            <button type="button" className="btn btn-tool" data-card-widget="remove"
                                    data-toggle="tooltip" title="Remove">
                                <i className="fas fa-times"/></button>
                        </div>
                    </div>
                    <div className="card-body">
                        Start creating your amazing application!
                    </div>
                    <div className="card-footer">
                        Footer
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
