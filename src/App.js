import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <div className="App">
      <UserContainer />
      {/* <ItemContainer cake />
      <ItemContainer />
      <HooksCakeContainer />
      <CakeContainer />
      <NewCakeContainer />
      <IceCreamContainer /> */}
    </div>
  );
}

export default App;
