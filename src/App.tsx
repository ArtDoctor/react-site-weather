import React, { useState } from 'react'; 
import './style.css';
import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'
import bg3 from './img/bg3.png'
import logo from './img/logo.png'
import weathericon from './img/weather_icon.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import LoginForm from './components/login.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  
  const Logout =()=>{
    localStorage.setItem("loggedIn", "no");
    window.location.reload();
  }
  
  return (
    <Router>
      <header className = "header">
        <nav className = "navbar">
            <div className = "company_name">QCCompany</div>
            <ul className = "navoptions">
                <li className = "navoption"><Link to="/">Home</Link></li>
                <li className = "navoption"><Link to="/forecast">Forecast</Link></li>
                {localStorage.getItem("loggedIn")!=="yes"&&
                <li className = "navoption"><Link to="/sign-in">Login</Link></li>
                }
            </ul>
        </nav>
        {localStorage.getItem("loggedIn")==="yes"&&
          <div className="additional">
            <p className="user">Welcome, <span>{localStorage.getItem("name")}</span></p> 
            <button onClick={Logout} className = "button">Logout</button>
          </div>
        }
      </header>

      <Switch>
        <Route path="/sign-in">
          <LoginForm />
        </Route>
        <Route path="/forecast">
          <Forecast />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


function Home() {
  return(
    <div>
      <title>Quantum computers</title>
      
      <div className="first_block">
          <img className="picture" src={bg1} alt="picture1"></img>
          <div className="block1">
              <img className="logo" src={logo} alt="logo"></img><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <h2>Quantum Computers</h2>
              <p>Quantum computers can be extremely advantageous for certain tasks where they could vastly outperform even our best supercomputers.</p>
          </div>
      </div>

      <div className="second_block">
          <div className="block2">
              <h2>Why are they better?</h2>
              <p>Classical computers, which include smartphones and laptops, encode information in binary “bits” that can either be 0s or 1s. In a quantum computer, the basic unit of memory is a quantum bit or qubit.<br></br><br></br>For instance, eight bits is enough for a classical computer to represent any number between 0 and 255. But eight qubits is enough for a quantum computer to represent every number between 0 and 255 at the same time. A few hundred entangled qubits would be enough to represent more numbers than there are atoms in the universe.</p>
          </div>
          <img className="picture" src={bg2} alt="picture2"></img>
      </div>

      <div className="third_block">
          <div className="ad">You can get all the power of quantum technologies!</div>
          <div className="third-block-main">
              <div className="block3">
                  <h2>BUY ONE TODAY</h2>
                  <p>Our company offers quantum computers, which can work without any problems in your house as usual PC. Delivery and other stuff is payed by the buyer. No refunds.</p>
              </div>
              <div className="right_third">
                  <img className="picture1" src={bg3} alt="picture3"></img>
                  <div className="ad1">Order one:</div>
                  <button className="button_third"><a href="#">Buy</a></button>
              </div>
          </div>
        </div>
    </div>
  );
}

function Forecast() {
  const [user, setUser] = useState({name: "", email: ""});
  const [temperature, setTemperature] = useState("");
    const [desc, setDesc] = useState("");
    const [city, setCity] = useState("London");
    const [country, setCountry] = useState("UK");
  
    const getWeatherData = (city: any, country: any) => {
      axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=5bdba5bc9033e914627580647f9a2c6b`,
      })
        .then((response: any) => {
          console.log(response.data.main.temp);
          // Kelvin to Fahrenheit
          // setTemperature((response.data.main.temp - 273.15) * 1.8 + 32);
  
          // Kelvin to Celsius
          var temp = parseInt(response.data.main.temp)-273.15;
          setTemperature(temp.toString());
          // console.log(response.data);
          setDesc(response.data.weather[0].main);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  if(localStorage.getItem("loggedIn")==="no"){
    return (
      <div>
        <div className="bodylogin">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-2"></div>
                  <div className="col-lg-6 col-md-8 login-box">
                  <div className = "form-inner">
                    <div className="text-in-forecast">User is not logged in!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    
    return(
      <div className="bodylogin">
      <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
          width: "100%",
          backgroundColor: "#18181B",
          fontSize: "20px",
          color: "#fff",
        }}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button className="button"
          onClick={() => {
            getWeatherData(city, country);
            console.log(getWeatherData);
          }}
        >
          Set city
        </button>
      </div>
      
      <br />
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "150px",
            width: "450px",
            backgroundColor: "#27272A",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            color: "#fff",
          }}
        >

          <table>
            <tr>
              <td>
                Weather in {city}<br />
                {new Date().toLocaleString()}
              </td>
              <td colSpan={3}>
                <img className="logo" src={weathericon} alt="logo"></img>
              </td>
            </tr>
            <tr>
              <td>
              {Math.round(parseInt(temperature) * 100) / 100} ℃ - {desc}
              </td>
            </tr>
          </table>
        </div>
        <br />
        
      </div>
    );
    </div>
    </div>
  );
  }
} 
