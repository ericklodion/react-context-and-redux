import { Container } from "react-bootstrap";
import Login from "./components/login";
import Logout from "./components/logout";
import User from "./components/user";

function App() {
  return (
    <Container className="App">
      <Login/>
      <User/>
      <Logout/>
    </Container>
  );
}

export default App;
