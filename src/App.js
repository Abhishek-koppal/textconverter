import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setInterval(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
    <Navbar title="ConvoText"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Textform showAlert={showAlert} heading="Enter to Convert Text"/>
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
