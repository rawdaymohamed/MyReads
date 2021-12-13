import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";
import "./App.css";
function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/search" element={<SearchPage />} />
        <Route exact path="/" element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default HomePage;
