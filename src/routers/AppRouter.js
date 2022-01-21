import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../components/personal/about/About";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
