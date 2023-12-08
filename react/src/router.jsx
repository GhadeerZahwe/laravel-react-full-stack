import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";
import Users from "./views/Users";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";

const router = (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Routes>
              <Route path="/users" element={<Users />} />
            </Routes>
          </DefaultLayout>
        }
      />
      <Route
        path="/guest"
        element={
          <GuestLayout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </GuestLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default router;
