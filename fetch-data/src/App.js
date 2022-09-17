import React from "react";
import { useState } from "react";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/users/2";

function App() {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setUserData(data);
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      <h2>User Data</h2>

      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Website:</strong> {userData.website}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Phone:</strong> {userData.phone}
      </p>
    </div>
  );
}

export default App;
