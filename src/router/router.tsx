import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Top } from "../components/pages/top"
import { TimeLine } from "../components/pages/timeline"

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Top />} />
          <Route path="TimeLine" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
