import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutScreen } from "../components/about/AboutScreen";
import { ApisScreen } from "../components/apis/ApisScreen";
import { AppsScreen } from "../components/apps/AppsScreen";
import { BlogsScreen } from "../components/blogs/BlogsScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { NavBar } from "../components/shared/NavBar";
import { AppsRouter } from "./AppsRouter";
import { BlogsRouter } from "./BlogsRouter";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/blogs" element={<BlogsScreen />} />
          <Route path="/blogs/*" element={<BlogsRouter />} />
          <Route path="/apps" element={<AppsScreen />} />
          <Route path="/apps/*" element={<AppsRouter />} />
          <Route path="/apis" element={<ApisScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
