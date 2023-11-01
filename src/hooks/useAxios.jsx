import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});
const useAxios = () => {
  const auth = useAuth();
  const { logout } = auth ? auth : {};
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      function (res) {
        return res;
      },
      function (error) {
        const { status } = error.response;

        if (status === 401 || status === 403) {
          logout()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);
  return axiosInstance;
};
export default useAxios;
