import { useEffect, useState } from "react";
import axios from "axios";
// import "./App.css";
import styles from "./App.module.css";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log("error fetching data");
      });
  }, []);

  const inline = {
    heading: {
      color: "red",
      backgroundColor: "pink",
      padding: "10px",
      border: "1px solid grey",
      borderRadius: "20px",
    },
    p: {
      color: "blue",
    },
  };

  return (
    <>
      <div className="container">
        <h1 style={inline.heading} className="title">
          Image Title
        </h1>

        {users.map((user) => (
          <div key={user.id} className={styles.heading}>
            <h2 className={styles.second}>{user.name}</h2>
            <p>Email : {user.email}</p>
            <p>city : {user.address.city}</p>
            <p>Lat : {user.address.geo.lat}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
