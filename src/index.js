import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ReserveTable from "./pages/Reservations/ReserveTable";
import ReservationConfirmed from "./pages/Reservations/ReservationConfirmed";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<Home />} />
        <Route path="/reservations" element={<ReserveTable />} />
        <Route path="/reservation-confirmed" element={<ReservationConfirmed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
