import React ,{ useState, useEffect }from 'react';
import './App.css';
import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Live_booking from './components/live_booking';
import home from './components/home';
import input from './input.json'

function App() {

  const [inputdata, setInputdata] = useState(input)

  return (
    <div className="App">

<div class="wrapper">
    
    <nav id="sidebar">
        <div class="sidebar-header">
  <h3>{inputdata.hotel_name}</h3>
  <p>AIOSELL</p>
        </div>

        <ul class="list-unstyled components">
           
            <li>
              <a href="/">Home</a>
            </li>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Rates and Inventory</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="/live">Live Booking</a>
                    </li>
                </ul>
            </li>
        </ul>

    </nav>
    
    
</div>

<Router>
     <Switch>
     <Route exact path="/" component={home}/>
     <Route path="/live" component={Live_booking}/>
     </Switch>
    </Router>
    </div>
    
  );
}

export default App;
