import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home';
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import About from './Component/About/About';
function App() {

  return (
   <div>
     <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}> </Route>
        <Route path = '/about/:name' element = {<About/>}> </Route>
      </Routes>
     </Router>
   </div>
  );
}

export default App;
