import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import "../src/css/style.css";
import "../src/css/common.css";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import SignUpPage from "./components/pages/SignUpPage/SignUpPage";
import AudioPage from "./components/pages/AudioPage/AudioPage";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";

function App() {
  return (
    <body>
      {/* <LandingPage /> */}
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      {/* <AudioPage /> */}
      <DashboardPage />
    </body>
  );
}

export default App;
