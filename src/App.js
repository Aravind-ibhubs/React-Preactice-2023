import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Navigate/Navigate";
import NotFound from "./NotFound";
import UserComponent1 from "./UserContext1";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Context = lazy(() => import("./Context/Context"));

function App() {

  return(
    <BrowserRouter>
      <Suspense fallback={<div>Loading.....</div>}>
        <Navigation />
        <Routes>
          <Route path='*' element={<NotFound pageStatus="404" />}/>
          <Route path="/" index element={<Home page1="king" />} />
          <Route path="/about" Component={About} />
          <Route path="/context" Component={Context} />
          <Route path="/user" element={<UserComponent1 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
