import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/user-context";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) return navigate("/");
  }, [token, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
