import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import { auth, provider } from "./config/firebase";
import { signInWithPopup } from "firebase/auth"; // Ensure this is imported

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Ensure this references the correct user data from result
        setUser(result.user);
      })
      .catch((error) => console.error("Sign-in failed:", error));
  };

  return (
    <div className="App">
      {user ? (
        <Chat user={user} />
      ) : (
        <div className="p-5 text-center">
          <img
            src="/src/assets/work-1.png" // Replace with a valid image path
            alt="logo"
            width={400}
            height={400}
            className="pr-2"
            style={{ borderRadius: "200px" }}
          />
          <button
            className="btn btn-primary"
            style={{ marginTop: "50px" }}
            onClick={handleSignIn}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;