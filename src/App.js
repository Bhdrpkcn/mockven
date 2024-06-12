// App.js

import React from "react";
import { useLocation } from "react-router-dom";
import "./App.scss";
import Body from "./layout/body/Body";
import Navbar from "./layout/navbar/Navbar";
import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import Footer from "./layout/footer/Footer";
import BackToTop from "./utils/BackToTop";
import OuterFlow from "./pages/outerFlow/OuterFlow";

function AppContent() {
  const { theme } = useTheme();
  const location = useLocation();

  const isOuterFlow = location.pathname !== "/";

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
          <Footer />
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
