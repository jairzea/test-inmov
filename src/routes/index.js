import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Create from "../views/Create";
import Results from "../views/Results";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
