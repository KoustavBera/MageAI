import React, { useContext } from "react";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import BuyCredit from "./pages/BuyCredit";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import { AppContext } from "./context/AppContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ——— Gradient + Grid Overlay ——— */}
      <div
        className="absolute inset-0 -z-10 h-full w-full"
        style={{
          background: "linear-gradient(to bottom, #ff9696, #782e2e)",
          backgroundImage: `
            linear-gradient(to right, rgba(128, 128, 128, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(128, 128, 128, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "14px 24px",
        }}
      >
        {/* ——— Fuchsia Glow ——— */}
        <div
          className="absolute left-0 right-0 top-0 -z-10 m-auto
                     h-[310px] w-[310px] rounded-full
                     bg-fuchsia-400 opacity-20 blur-[100px]"
        />
      </div>

      {/* ——— Your App Content ——— */}
      <ToastContainer position="bottom-right" />

      <div className="px-4 sm:px-10 md:px-14 lg:px-28">
        <Navbar />
        {showLogin && <Login />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
        <div
          className="absolute  left-1/3   bottom-0 -z-10 m-auto
                     h-[310px] w-[310px] rounded-full
                     bg-fuchsia-400 opacity-30 blur-[100px]"
        />
        <Footer />
      </div>
    </div>
  );
};

export default App;
