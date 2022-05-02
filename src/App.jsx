import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./Routes/MainRoutes";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Provider store={store}>   <MainRoutes/></Provider>
   </BrowserRouter>
    </div>
  );
}

export default App;
