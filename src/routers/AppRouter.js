import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "../components/personal/about/About";
import { TestPage } from "../components/TestPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
