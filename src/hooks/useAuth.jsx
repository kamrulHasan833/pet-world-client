import { useContext } from "react";
import { authContext } from "../components/contexts/authContext";
export default function useAuth() {
  const value = useContext(authContext);
  return value;
}
