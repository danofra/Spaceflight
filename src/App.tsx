import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./component/HomeComponent";
import ArticlecarddetailsComponent from "./component/ArticlecarddetailsComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarComponent />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route
              path="/articlecarddetails"
              element={<ArticlecarddetailsComponent />}
            />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
