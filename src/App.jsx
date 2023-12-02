
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useDocStates } from "./Components/utils/global.context";

function App() {
  const {state} = useDocStates();
  return (
      <div className={`App ${state.theme}`}>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
