import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./components/Chat";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./config/firebase";
import { addDoc, collection } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      {user ? (
        <Chat user={user} />
      ) : (
        // <div className="p-5 text-center">
        //   <div>
        //     <img
        //       src="./assests/IMG-20250309-WA0004.jpg" 
        //       alt="logo"
        //       width={300}
        //       height={300}
        //       className="pr-2"
        //       style={{ borderRadius: "200px" }}
        //     />
        //   </div>
          <div>
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
