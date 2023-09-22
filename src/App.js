import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Navigate/Navigate";
import NotFound from "./NotFound";

const Home = lazy(() => import("./Home/Home"));
const About = lazy(() => import("./About/About"));
const Context = lazy(() => import("./Context/Context"));

function App() {

  return(
    <BrowserRouter>
      <Suspense fallback={<div>Loading.....</div>}>
        <Navigation />
        <Routes>
          <Route path='*' element={<NotFound />}/>
          <Route path="/" index Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/context" Component={Context} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
