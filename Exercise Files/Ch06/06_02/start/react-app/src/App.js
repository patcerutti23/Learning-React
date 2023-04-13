import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatarimg }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatarimg} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/patcerutti23`)
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data) return <GithubUser name={data.login} avatarimg={data.avatar_url} />;
  return <h1>Data</h1>;
}

export default App;
