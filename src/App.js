import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Profile from "./components/Profile/Profile";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  console.log("User", user);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      setUser(authUser);
    });
  }, []);

  return (
    <div className="App">{!user ? <Signup /> : <Profile user={user} />}</div>
  );
}

export default App;
