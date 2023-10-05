import { Provider } from "react-redux";
import Bg from "./components/Bg";
import Navbar from "./components/Navbar";
import { store } from "./redux/store/store";
import BgButtons from "./components/BgButtons";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Bg />
      <BgButtons />
    </Provider>
  );
}

export default App;
