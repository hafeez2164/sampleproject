import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./MainScreen/Calculator";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Calculator />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;