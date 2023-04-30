import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./components/UserDetails";
import Progresbar from "./components/Progresbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <UserDetails />
      {/* <Progresbar/> */}
    </>
  );
}

export default App;
