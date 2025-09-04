import { Route, Routes } from "react-router";
import MainPage from "../pages/MainPage";
import InnerProduct from "../pages/InnerProduct";

function MainRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"/:productid"} element={<InnerProduct />} />
    </Routes>
  );
}

export default MainRoutes;
