import { render } from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CharacterCreation from "./routes/characterCreation";
import Front from "./routes/front"
import Dialogue from "./routes/dialogue"
import Text from "./routes/text"
import Map from "./routes/map"
import Choice from "./routes/choice"
import Login from "./routes/login"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss"

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="/front" element={<Front />} />
        <Route path="/login" element={<Login />} />
        <Route path="/characterCreation" element={<CharacterCreation />} />
        <Route path="/story">
          <Route path="/story/dialogue" element={<Dialogue />} >
            <Route path=":dialogueId" element={<Dialogue />} />
          </Route>
          <Route path="/story/map" element={<Map />} >
            <Route path=":mapId" element={<Map />} />
          </Route>
          <Route path="/story/text" element={<Text />} >
            <Route path=":textId" element={<Text />} />
          </Route>
          <Route path="/story/choice" element={<Choice />} >
            <Route path=":choiceId" element={<Choice />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />

      </Route>
    </Routes>
  </BrowserRouter>
  , rootElement);