import { useAuth } from "../hooks/useAuth";

export const Auth = () => {
  // Now all the data stored in the context can
  // be accessed with the auth variable
  const { status, login } = useAuth();
  console.log(" Status  :", status);
  return (
    <div>
      <h1> Are You Authenticated ?</h1>
      {status ? <p> Yes yor are</p> : <p> Nopes</p>}
      <button onClick={login}> Click Login</button>
    </div>
  );
};
