import {Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { NotFound } from "../pages/NotFound";
// import { Edit } from "../pages/Edit";

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create/:id" element={<Create />} />
        <Route path="*" element={<NotFound /> } />
    </Routes>
  )
}
