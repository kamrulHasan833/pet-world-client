import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import Ratings from "../shared/Ratings";

function UpdateProduct() {
  const loadData = useLoaderData();

  const loadProduct = loadData && typeof loadData === "object" ? loadData : {};
  const {
    _id,
    name,
    imageURL,
    price,
    description,
    type,
    brand,
    rating,
    categories,
    color,
    availability,
  } = loadProduct;
  console.log(loadProduct);
  const { theme } = useTheme();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const imageURL = form.image.value;
    const description = form.description.value;
    const categories = form.categories.value.trim();
    const splitSubject = categories.includes(",")
      ? ","
      : categories.includes(" ")
      ? " "
      : null;
    let newCategories;
    if (splitSubject) {
      newCategories = categories.split(splitSubject);
    } else {
      newCategories = categories;
    }
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const brand = form.brand.value;
    const rating = parseFloat(form.rating.value);
    const color = form.color.value;
    const newColor = color ? color : null;
    const availability = form.availability.value;

    const product = {
      name,
      price,
      imageURL,
      description,
      type,
      brand,
      rating,
      categories: newCategories,
      color: newColor,
      availability,
    };

    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have updated product successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed!",
            text: "No field to update.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <main className={` ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      <SectionWrapper>
        <div className=" font-inter hero pt-14 md:pt-20 pb-14 md:pb-20">
          <div className="w-full ">
            <div className="text-center lg:text-left mb-5 md:mb-6">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                  theme === "light" ? "text-title-color" : "text-white"
                }`}
              >
                Update Product
              </h1>
              <p
                className={`mt-2 pb-6 ${
                  theme === "light" ? "" : "text-gray-500"
                }`}
              >
                Please update a product by fill in the flowing fields.
              </p>
            </div>
            <div className=" w-full border ">
              <form className=" p-6 " onSubmit={handleUpdateProduct}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* left */}
                  <div className="  space-y-2">
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Name
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product Name"
                        className="input input-bordered"
                        name="name"
                        defaultValue={name}
                        required
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Image URL
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product image"
                        className="input input-bordered"
                        name="image"
                        defaultValue={imageURL}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Price ($)
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product Price"
                        className="input input-bordered"
                        name="price"
                        defaultValue={price}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <p className="flex items-center gap-1">
                          {" "}
                          <span
                            className={`label-text ${
                              theme === "light" ? "" : "text-gray-400"
                            }`}
                          >
                            {" "}
                            Rating{" "}
                          </span>{" "}
                          <Ratings rev={rating} id={_id}></Ratings>
                        </p>
                      </label>
                      <input
                        type="text"
                        defaultValue={rating}
                        placeholder="Product Rating"
                        className="input input-bordered"
                        name="rating"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Categories{" "}
                          <span>(multiple must be separated by comma)</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Categories"
                        className="input input-bordered"
                        name="categories"
                        defaultValue={categories}
                        required
                      />
                    </div>
                  </div>
                  {/* rigth */}
                  <div className=" flex-wrap space-y-2">
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Description
                        </span>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Description"
                        className="input input-bordered"
                        name="description"
                        defaultValue={description}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Type
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product type"
                        className="input input-bordered"
                        name="type"
                        defaultValue={type}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Brand
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Brand name"
                        className="input input-bordered"
                        name="brand"
                        defaultValue={brand}
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Color (optional)
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Color Name"
                        className="input input-bordered"
                        name="color"
                        defaultValue={color}
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span
                          className={`label-text ${
                            theme === "light" ? "" : "text-gray-400"
                          }`}
                        >
                          {" "}
                          Availability
                        </span>
                      </label>
                      <select
                        className="input input-bordered focus:outline-none max-w-[100px] p-0 pl-2"
                        name="availability"
                        defaultValue={availability}
                      >
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 text-center flex items-center">
                  <button className="btn w-1/4 btn-primary  hover:btn">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
export default UpdateProduct;
