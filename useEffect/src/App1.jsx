import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log("Error fetching the data");
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1 className="title">Image Title</h1>

        {users.map((user) => (
          <div key={user.id} className="user">
            <h2>{user.name}</h2>
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
