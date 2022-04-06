import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("working on google");
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
