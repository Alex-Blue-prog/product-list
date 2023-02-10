import {Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { Create } from "../pages/Create";

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
    </Routes>
  )
}
