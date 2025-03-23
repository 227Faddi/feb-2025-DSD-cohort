import { Route, Routes } from "react-router";
import EnsureAuth from "./auth/EnsureAuth";
import EnsureGuest from "./auth/EnsureGuest";
import RootLayout from "./layouts/RootLayout";
import AccessControlPage from "./pages/AccessControlPage";
import Complaints from "./pages/Complaints";
import Dashboard from "./pages/Dashboard";
import HomePageLogin from "./pages/HomePageLogin";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";
import ApartmentDetails from "./pages/details/ApartmentDetails";
import ComplaintDetails from "./pages/details/ComplaintDetails";
import LeaseDetails from "./pages/details/LeaseDetails";
import TenantDetails from "./pages/details/TenantDetails";
import CreateLeasePage from "./pages/CreateLease";
import LeaseView from "./pages/LeaseView";
import Lease from "./pages/details/Lease";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />}></Route>

      <Route element={<EnsureGuest />}>
        <Route path="/" element={<HomePageLogin />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route element={<EnsureAuth />}>
        <Route element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="complaints" element={<Complaints />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="access-control" element={<AccessControlPage />}></Route>
          <Route path="settings" element={<AccountSettings />}></Route>
          <Route path="apartment-details/:id" element={<ApartmentDetails />}></Route>
          <Route path="lease-details/:id" element={<LeaseDetails />}></Route>
          <Route path="lease/:id" element={<Lease />}></Route>
          <Route path="tenant-details/:id" element={<TenantDetails />}></Route>
          <Route path="complaint-details/:id" element={<ComplaintDetails />}></Route>
        </Route>
        <Route path="/create-lease" element={<CreateLeasePage />}></Route>
        <Route path="/lease-view" element={<LeaseView />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
