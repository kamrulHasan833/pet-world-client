import { useEffect, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hooks/useAuth";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import Ratings from "../shared/Ratings";

function ProductDetails() {
  const loadData = useLoaderData();
  const { theme } = useTheme();
  const currentDate = new Date().toISOString().slice(0, 10);

  const product = loadData && typeof loadData === "object" ? loadData : {};
  const { _id, imageURL, name, description, price, type, brand, rating } =
    product;
  const [quanError, setQuanError] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const email = user.email ? user.email : null;
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const loadBrand = async () => {
      try {
        const res = await fetch(`https://uniqueit-server.vercel.app/brands`);

        const data = await res.json();
        setBrands(data);
      } catch (err) {
        console.log(err);
      }
    };

    loadBrand();
  }, []);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = parseInt(form.quantity.value);
    const date = form.date.value;

    const cardProduct = {
      imageURL,
      name,
      description,
      price,
      type,
      brand,
      rating,
      quantity,
      date,
      username: email,
    };
    if (quantity === 0) {
      setQuanError("Quantity can't be 0!");
    } else if (quantity < 0) {
      setQuanError("Quantity can't be negative!");
    } else {
      setQuanError(null);
      if (email) {
        fetch("https://uniqueit-server.vercel.app/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cardProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Product have been added  successfully.",
                icon: "success",
                confirmButtonColor: "#22015B",
                confirmButtonText: "Go On",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate(`/carts/${email}`);
                }
              });
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  return (
    <section
      className={` font-inter ${theme === "light" ? "bg-white" : "bg-dark"}`}
    >
      <SectionWrapper>
        <div
          className={`grid grid-cols-1 ${
            theme === "light" ? "gap-0 " : "gap-6"
          }  md:grid-cols-2 pt-10 md:pt-20 pb-10 md:pb-20 `}
        >
          <div className=" ">
            {/* <img src={imageURL && imageURL} alt="" /> */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: imageURL,
                },
                largeImage: {
                  src: imageURL,
                  width: 800,
                  height: 800,
                },
                enlargedImageClassName: "max-w-[800px]",
                enlargedImageContainerClassName: "z-50 left-0 md:left-full",
              }}
            />
          </div>
          <div>
            <h3
              className={`tex-lg md:text-xl font-bold ${
                theme === "light" ? "text-title-color" : "text-white"
              }`}
            >
              {name}
            </h3>
            <div className="flex justify-between mb-1">
              <p className="font-semibold text-lg text-ash">
                ${price && price}
              </p>{" "}
              <p className="font-semibold text-lg text-ash">
                <Ratings rev={rating && rating} id={_id && _id}></Ratings> (
                {rating && rating} reviews)
              </p>
            </div>
            <p className={theme === "light" ? "" : "text-gray-600"}>
              {description}
            </p>
            <div className="flex gap-3 content-baseline mt-5 mb-5">
              {brands &&
                brands.length > 0 &&
                brands.map((brand, ind) => (
                  <a
                    key={ind}
                    className={`w-7 sm:w-10 ${
                      theme === "light"
                        ? "bg-ash bg-opacity-20"
                        : "bg-white bg-opacity-80"
                    } bg-opacity-20 rounded-full cursor-pointer hover:scale-110`}
                  >
                    <img
                      src={
                        brand.image.dark ? brand.image.dark : brand.image.light
                      }
                      alt=""
                      className="rounded-full"
                    />
                  </a>
                ))}
            </div>
            <div>
              <h4 className=" font-medium text-ash">Brand: {brand}</h4>
              <h4 className="font-medium  text-ash">Type: {type}</h4>
            </div>
            <form className=" mt-3" onSubmit={handleAddToCart}>
              <div>
                {" "}
                <label>
                  <span className="font-medium  text-ash mr-1"> Quantity:</span>
                  <input
                    className="border border-primary px-1 py-1 md:px-1  rounded-lg w-20 md:w-24 focus:outline-none text-center "
                    type="number"
                    name="quantity"
                    defaultValue={1}
                  />
                  <span
                    className={`font-medium  text-ash ${
                      quanError ? "block" : "hidden"
                    } mr-1 text-red-600`}
                  >
                    {quanError}
                  </span>
                </label>
              </div>
              <div className="mt-2">
                {" "}
                <label>
                  <span className="font-medium  text-ash mr-1">
                    {" "}
                    Order Date:
                  </span>
                  <input
                    className="border border-primary px-1 py-1 md:px-1  rounded-lg focus:outline-none text-center "
                    type="date"
                    name="date"
                    defaultValue={currentDate}
                  />
                </label>
              </div>
              <div className="text-center mt-10 md:mt-14">
                <input
                  type="submit"
                  value="Add to Cart"
                  className="px-4 py-2 md:px-5 md:py-3 lg:px-7 lg:py-4 bg-primary hover:bg-secondary rounded-full text-white text-sm md:text-base cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default ProductDetails;
