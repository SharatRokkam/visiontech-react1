import { useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();

  return (
    <>
      <h1>Hello! {username}</h1>
    </>
  );
};

export default User;
