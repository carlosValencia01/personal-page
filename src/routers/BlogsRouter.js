import React from "react";
import { Route, Routes } from "react-router-dom";
import { BigData } from "../components/blogs/blogsEntries/BigData";
import { Nft } from "../components/blogs/blogsEntries/Nft";
import { SolidPrinciple } from "../components/blogs/blogsEntries/SolidPrinciple";
import { BlogsScreen } from "../components/blogs/BlogsScreen";
import { TestPage } from "../components/TestPage";

export const BlogsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/que-es-big-data" element={<BigData />} />
        <Route path="/que-es-nft" element={<Nft />} />
        <Route path="/principio-SOLID" element={<SolidPrinciple />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="*" element={<BlogsScreen />} />
      </Routes>
    </>
  );
};
