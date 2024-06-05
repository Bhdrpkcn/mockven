import React from "react";
import "./App.scss";
import Body from "./layout/body/Body";
import Navbar from "./layout/navbar/Navbar";
import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import Footer from "./layout/footer/Footer";
import BackToTop from "./utils/BackToTop";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <BackToTop />
      <Body />
      <Footer />
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
