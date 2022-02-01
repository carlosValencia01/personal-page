import React from "react";
import { Route, Routes } from "react-router-dom";
import { BigData } from "../components/blogs/blogsEntries/BigData";
import { BlogsScreen } from "../components/blogs/BlogsScreen";
import { TestPage } from "../components/TestPage";

export const BlogsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/que-es-big-data" element={<BigData />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<BlogsScreen />} />
      </Routes>
    </>
  );
};
