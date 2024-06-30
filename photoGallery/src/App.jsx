import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllProductView from "./views/AllProductView";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllProductView/>}/>
      </Routes>
    </Router>
  )
}

export default App