import React from "react";
import { useAuth } from "./providers/auth";
import Login from "./components/login";

function App() {

  const { setUser } = useAuth();

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
