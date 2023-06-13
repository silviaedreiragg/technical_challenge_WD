import PhoneDetail from "./components/PhoneDetail";
import PhonesList from "./components/PhonesList";
import { Routes, Route} from "react-router-dom"

function App() {
  return (


    <Routes>
    <Route path="/phones" element={<PhonesList/>} />
    <Route path="/phones/:id" element={<PhoneDetail/>} />


    </Routes>
  );
}

export default App;
