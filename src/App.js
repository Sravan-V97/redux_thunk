import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "./services/thunk";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const obtainedUsers = useSelector((state) => state.users);
  console.log(obtainedUsers);

  const list = document.getElementById("list");

  window.onload = () => {
    list.innerHTML = obtainedUsers.map((i) => `<li>${i}</li>`).join("");
  };

  return (
    <div className="App">
      <ul id="list"></ul>;
    </div>
  );
}

export default App;
