
import {BrowserRouter,Routes,Route} from "react-router-dom";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TravelPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
