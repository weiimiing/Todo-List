import { Routes, Route } from "react-router-dom";
import TodoPage from "@/pages/TodoPage";
import RandomPage from "@/pages/randomPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/random" element={<RandomPage />} />
    </Routes>
  );
}
