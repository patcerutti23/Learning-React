import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name }) {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/patcerutti23`)
      .then((response) => response.json())
      .then((data) => setData(data)); // you can use shorthand here because data is the same value being passed in so you can do .then(setData)
  }, []);
  if (data) return <GithubUser name={data.name} />;
  return <h1>DAta</h1>;
}

export default App;
