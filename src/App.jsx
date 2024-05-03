

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyHeading from './components/MyHeading';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MySearch from "./components/MySearch";
import Meteo from "./components/Meteo";





function App() {
  

  return (
    <div className="App">
      <header className="App-header">
      <MyHeading/>
        <BrowserRouter> 
       
<Routes> 
  <Route path="/" element = {<MySearch/>} />
<Route path="/meteo/:cityname" element={<Meteo />} />
</Routes>
 
 </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
