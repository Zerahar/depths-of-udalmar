import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <Link to="/characterCreation">Create a character</Link>
    </div>
  );
}
