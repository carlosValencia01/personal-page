import React from "react";
import { Route, Routes } from "react-router-dom";
import { MemeGenerator } from "../components/apps/apps/02-memeGenerator/MemeGenerator";
import { Apa } from "../components/apps/apps/Apa";

export const AppsRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/apa" element={<Apa />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
      </Routes>
    </>
  );
};
