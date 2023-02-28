import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FooPage } from "../views/FooPage";
import { Page404 } from "../views/Page404";

export const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FooPage />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
