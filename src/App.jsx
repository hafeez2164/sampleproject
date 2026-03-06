import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Calculator from "./MainScreen/Calculator";
import Form from "./MainScreen/Form";
import Table from "./MainScreen/Table";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/form" element={<Form />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;