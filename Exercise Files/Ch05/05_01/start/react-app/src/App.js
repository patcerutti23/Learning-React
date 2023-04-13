import "./App.css";
import { useRef } from "react";

function App() {
  const txtTitle = useRef();
  const hexColor = useRef(); // in this case we are reaching out to the input or referencing it to get the inputs current value it will not re-render

  console.log(txtTitle);
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = ""; // sets it back to an empty string after alert
  };

  return (
    <form onSubmit={submit}>
      <input ref={txtTitle} type="text" placeholder="color title"></input>
      <input ref={hexColor} type="color"></input>
      <button>ADD</button>
    </form>
  );
}

export default App;
