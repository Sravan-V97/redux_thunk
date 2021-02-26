import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "./services/thunk";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchUsers());
  const obtainedUsers = useSelector((state) => state.users);
  // console.log(obtainedUsers);

  return <div className="App"></div>;
}

export default App;
