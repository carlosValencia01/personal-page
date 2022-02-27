import React from "react";
import { Route, Routes } from "react-router-dom";
import { Apa } from "../components/apps/apps/Apa";

export const AppsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/apa" element={<Apa />} />
      </Routes>
    </>
  );
};
