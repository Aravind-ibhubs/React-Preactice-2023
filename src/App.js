import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Context from "./Context/Context";
import Navigation from "./Navigate/Navigate";

function App() {
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/context" Component={Context} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
