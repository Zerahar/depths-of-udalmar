import { render } from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CharacterCreation from "./routes/characterCreation";
import Front from "./routes/front"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/front" element={<Front />} />
        <Route path="/characterCreation" element={<CharacterCreation />} />
      </Route>
    </Routes>
  </BrowserRouter>
  , rootElement);