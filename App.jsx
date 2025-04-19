
import React from "react";
import { motion } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AnalysisPage from "@/pages/AnalysisPage";
import ArticleAnalysisPage from "@/pages/ArticleAnalysisPage";
import TemporalAnalysisPage from "@/pages/TemporalAnalysisPage";
import MediaObservatoryPage from "@/pages/MediaObservatoryPage";
import ReinformationPage from "@/pages/ReinformationPage";
import MultimediaPage from "@/pages/MultimediaPage";
import AboutUsPage from "@/pages/AboutUsPage";
import ContactPage from "@/pages/ContactPage";
import LegalPage from "@/pages/LegalPage";
import ShopPage from "@/pages/ShopPage";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/analysis/:id" element={<ArticleAnalysisPage />} />
        <Route path="/analysis/temporal/:period" element={<TemporalAnalysisPage />} />
        <Route path="/observatory/:mediaId?" element={<MediaObservatoryPage />} />
        <Route path="/reinformation" element={<ReinformationPage />} />
        <Route path="/multimedia" element={<MultimediaPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal" element={<LegalPage />} />
        <Route path="/boutique" element={<ShopPage />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
