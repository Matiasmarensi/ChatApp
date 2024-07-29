import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
function App() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
