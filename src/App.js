import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import Calculator from './components/pages/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <nav>
          <div className="header">
            <h1 className="title">Math Magicians</h1>

            <ul className="navigation">
              <li><Link to="/" className="home-link">Home</Link></li>
              <li><Link to="/Calculator">Calculator</Link></li>
              <li><Link to="/Quote">Quote</Link></li>
            </ul>
          </div>
        </nav>
        <div className="footer"><p>Math Magicians &copy; 2023</p></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
