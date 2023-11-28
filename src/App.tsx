import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />}/>
        <Route path="/signIn" element={<SignIn />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
