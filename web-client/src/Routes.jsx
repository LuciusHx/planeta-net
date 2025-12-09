import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import TelaInicialCliente from "./pages/TelaInicialClient/TelaInicialCliente";
import TelaLogin from "./pages/TelaLogin/TelaLogin";

export const AppRountes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<TelaInicialCliente />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};
