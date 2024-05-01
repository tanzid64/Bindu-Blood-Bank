import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/authSlice";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  return user?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoutes;
