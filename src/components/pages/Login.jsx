import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import { useTheme } from "../contexts/themeContext";
import SectionWrapperSecodary from "../layout/SectionWrapperSecodary";
import LoginButton from "../shared/LoginButton";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { state } = useLocation();
  const { theme } = useTheme();
  const [error, setError] = useState(false);
  const { login, loginWithGoogle } = useAuth();

  const navigate = useNavigate();

  // login with google
  const googleLogin = () => {
    setError(false);

    loginWithGoogle()
      .then(() => {
        // navigate to

        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonColor: "#22015B",
          confirmButtonText: "Go On",
        }).then((result) => {
          if (result.isConfirmed) {
            if (!state) {
              navigate("/");
            } else {
              navigate(state.pathname, {
                state: state.state,
              });
            }
          }
        });
      })
      .catch((err) => {
        setError(err);
      });
  };

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    setError(false);
    const target = e.target;
    const email = target.email.value;
    const password = target.password.value;

    // login
    login(email, password)
      .then(() => {
        // navigate to
        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonColor: "#22015B",
          confirmButtonText: "Go On",
        }).then((result) => {
          if (result.isConfirmed) {
            if (!state) {
              navigate("/");
            } else {
              navigate(state.pathname, {
                state: state.state,
              });
            }
          }
        });
      })
      .catch((err) => {
        setError(err);
      });

    // reset input fields
    target.email.value = "";
    target.password.value = "";
  };
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className={` ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      <SectionWrapperSecodary>
        <div className=" font-inter rounded-md pt-14 md:pt:20 pb-14 md:pb-20">
          <div className="border px-6 sm:px-20 py-6 sm:py-20  rounded-md ">
            <h3 className=" text-3xl md:text-5xl font-semibold text-primary text-center ">
              Login
            </h3>
            <LoginButton googleLogin={googleLogin}>
              Login with Google
            </LoginButton>
            <form
              onSubmit={handleLogin}
              className="card-body p-0 pt-5 sm:pt-10 "
            >
              <div className="form-control">
                <label className="label">
                  <span className=" text-primary">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your  email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-base text-primary">Password</span>
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your  password"
                    className="input input-bordered w-full"
                    name="password"
                    required
                  />
                  <span
                    onClick={handleShow}
                    className=" absolute right-3 top-3 cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible className=" text-title-color text-2xl "></AiOutlineEyeInvisible>
                    ) : (
                      <AiOutlineEye className=" text-title-color text-2xl "></AiOutlineEye>
                    )}
                  </span>
                </div>

                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-base sm:text-lg link link-hover text-primary"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="text-center mt-6">
                <input
                  type="submit"
                  className="bg-primary text-white text-base md:text-xl font-semibold rounded-md  px-6 md:px-20  py-2 md:py-3 hover:bg-white hover:text-primary border-none "
                  value="Login"
                />
              </div>
            </form>
            <div>
              <p
                className={`label-text-alt text-base sm:text-lg text-red-500 text-center pt-5 md:pt-8 ${
                  error ? "block" : "hidden"
                }`}
              >
                {error.code === "auth/invalid-login-credentials" &&
                  "Email or Password was not matched!"}
              </p>
              <p className="label-text-alt font-normal text-base sm:text-lg text-gray-600 text-center pt-5 md:pt-8">
                Do not have an account? Please{" "}
                <Link
                  to="/signup"
                  className="text-primary  link link-hover font-semibold"
                >
                  sign up
                </Link>{" "}
                now.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapperSecodary>
    </section>
  );
}

export default Login;
