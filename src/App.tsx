import NavbarComponent from "./component/NavbarComponent";
import HomeComponent from "./component/HomeComponent";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavbarComponent />
        <HomeComponent />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
