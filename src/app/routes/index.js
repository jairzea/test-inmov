import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Create from "../views/Create";
import Results from "../views/Results";
import Detail from "../views/Detail";

const RoutesComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/results" element={<Results />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
