import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "@/pages/login";
import DashboardPage from "@/pages/dashboard";
import TicketsPage from "@/pages/tickets";

export default function RouteList() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={LoginForm} />
          <Route path="/dashboard" Component={DashboardPage} />
          <Route path="/tickets" Component={TicketsPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
