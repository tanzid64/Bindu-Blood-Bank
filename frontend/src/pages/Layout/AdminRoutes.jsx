import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AdminNav from "../AdminDashboard/AdminNav";

const AdminRoutes = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  return user?.is_staff ? (
    <>
      <AdminNav />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default AdminRoutes;
