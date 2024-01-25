import { Route, Routes } from "react-router-dom";
import Memo from "./pages/Memo";
import React from "react";
import UseCallback from "./pages/UseCallback";

const App = () => (
  <Routes>
    <Route path="memo" element={<Memo />} />
    <Route path="use-callback" element={<UseCallback />} />
  </Routes>
);

export default App;
