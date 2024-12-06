import { useContext } from "react";
import { AuthContext } from "../provider/FirebaseProvider";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
