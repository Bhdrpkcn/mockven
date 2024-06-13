import React from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Body from "./layout/body/Body";
import Navbar from "./layout/navbar/Navbar";
import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import Footer from "./layout/footer/Footer";
import BackToTop from "./utils/BackToTop";
import OuterFlow from "./pages/outerFlow/OuterFlow";
import { useSelector } from "react-redux";

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();

  const isOuterFlow = location.pathname !== "/";
  const loading = useSelector((state) => state.api.loading);

  return (
    <div className={`App ${theme}`}>
      {isOuterFlow ? (
        <>
          <OuterFlow />
        </>
      ) : (
        <>
          <Navbar />
          <BackToTop />
          <Body />
          {!loading && <Footer />}
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
