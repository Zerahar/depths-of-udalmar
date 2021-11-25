import { render } from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CharacterCreation from "./routes/characterCreation";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/characterCreation" element={<CharacterCreation />} />
    </Routes>
  </BrowserRouter>
  , rootElement);