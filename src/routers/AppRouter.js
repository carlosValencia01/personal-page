import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutScreen } from "../components/about/AboutScreem";
import { ApisScreen } from "../components/apis/ApisScreen";
import { AppsScreen } from "../components/apps/AppsScreen";
import { BlogsScreen } from "../components/blogs/BlogsScreen";
import { HomeScreen } from "../components/home/HomeScreen";

import { TestPage } from "../components/TestPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/blogs" element={<BlogsScreen />} />
        <Route path="/apps" element={<AppsScreen />} />
        <Route path="/apis" element={<ApisScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
