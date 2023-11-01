import HeadRoom from "react-headroom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useIsUser from "../../hooks/useIsUser";

import { LiaBarsSolid } from "react-icons/lia";

import useAuth from "../../hooks/useAuth";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import NavItem from "../shared/NavItem";
function Navbar() {
  const navigate = useNavigate();
  const { logout, user, loading } = useAuth();
  const { displayName, photoURL } = user;
  const { pathname } = useLocation();
  const { theme, handleThemeMode } = useTheme();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "If wanna logout, click Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire("Success!", "You have  logged out successfully.", "success");
        navigate("/");
      }
    });
  };
  const currentUser = useIsUser();
  const items = (
    <>
      <NavItem path="/">Home</NavItem>
      <NavItem path="/create-product">Add Product</NavItem>
      <NavItem path={`/products/all`}>Products</NavItem>
    </>
  );

  return (
    <div
      className={`bg-transparent  ${
        pathname === "/" ? "md:absolute top-0 left-0 " : "shadow-lg"
      }  z-10 w-full `}
      data-aos="fade-down"
    >
      <HeadRoom style={{ zIndex: 9999 }}>
        <SectionWrapper>
          <div className={`navbar py-4 md:py-5 px-0 bg-transparent`}>
            <div className="navbar-start">
              <div className={`dropdown `}>
                <label tabIndex={0} className="btn btn-ghost md:hidden ">
                  <LiaBarsSolid
                    className={`text-2xl md:3xl ${
                      theme === "light" ? "text-dark" : "text-gray-400"
                    }`}
                  ></LiaBarsSolid>
                </label>
                <ul
                  tabIndex={0}
                  className={`menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-md w-80 gap-1 p-6 ${
                    theme === "dark" && "bg-dark shadow-md shadow-gray-600"
                  }`}
                >
                  {items}
                </ul>
              </div>
              <Link
                to="/"
                className="btn btn-ghost normal-case text-xl p-0 hover:bg-transparent"
              >
                <img
                  src="https://i.ibb.co/WfRcMh1/log.png"
                  alt="Logo"
                  className=" w-16 lg:w-20"
                />
              </Link>
            </div>
            <div className="navbar-center hidden md:flex">
              <ul id="nav-menu" className="menu menu-horizontal px-1 gap-2">
                {items}
              </ul>
            </div>
            <div className="navbar-end">
              <Link to={`/carts/${user.email}`}>
                {" "}
                <AiOutlineShoppingCart className="text-xl md:text-2xl hover:text-secondary  text-primary cursor-pointer mr-6"></AiOutlineShoppingCart>
              </Link>
              <div
                className={`text-xl md:2xl text-dark px-1 rounded-full mr-1`}
              >
                <div className="form-control ">
                  <label className="cursor-pointer label space-x-2">
                    {theme === "light" ? <BsMoon></BsMoon> : <BsSun></BsSun>}
                    <input
                      type="checkbox"
                      className="toggle toggle-sm toggle-primary"
                      checked={theme === "light" ? false : true}
                      onChange={handleThemeMode}
                    />
                  </label>
                </div>
              </div>
              {/* user dropdown */}
              {currentUser && !loading && (
                <div className={`dropdown dropdown-bottom dropdown-end `}>
                  <div
                    tabIndex={0}
                    className=" m-1 w-10  rounded-full border cursor-pointer"
                  >
                    <img
                      src={
                        photoURL
                          ? photoURL
                          : "https://i.ibb.co/6s4PzKR/no-avater.jpg"
                      }
                      alt=""
                      className=" rounded-full "
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${
                      theme === "light"
                        ? "bg-white"
                        : "bg-dark shadow-md shadow-gray-500"
                    }`}
                  >
                    <li>
                      <div className="flex flex-col   items-center gap-1">
                        <div
                          tabIndex={0}
                          className=" m-1 w-14  rounded-full border "
                        >
                          <img
                            src={
                              photoURL
                                ? photoURL
                                : "https://i.ibb.co/vV9hYVf/no-avater.jpg"
                            }
                            alt=""
                            className=" rounded-full "
                          />
                        </div>
                        {displayName && (
                          <h3
                            className={` text-xs md:text-sm ${
                              theme === "light"
                                ? "text-title-color"
                                : "text-gray-300"
                            } font-medium text-center hover:bg-transparent`}
                          >
                            {displayName && displayName}
                          </h3>
                        )}
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="btn bg-transparent border-none  bg-opacity-5 text-secondary capitalize pt-3"
                      >
                        <span className=" text-lg  sm:text-xl -mr-1">
                          <BiLogOutCircle></BiLogOutCircle>
                        </span>{" "}
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              {!currentUser && !loading && (
                <Link
                  to="/login"
                  className="btn text-primary bg-transparent border-none hover:bg-primary bg-opacity-5 text-base font-medium hover:text-white capitalize "
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </SectionWrapper>
      </HeadRoom>
    </div>
  );
}

export default Navbar;
