import Swal from "sweetalert2";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import Ratings from "../shared/Ratings";

function CreateProduct() {
  const { theme } = useTheme();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const imageURL = form.image.value;
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const brand = form.brand.value;
    const rating = parseFloat(form.rating.value);
    const product = {
      name,
      description,
      imageURL,
      type,
      brand,
      rating,
      price,
    };

    fetch("https://uniqueit-server.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "You have created product successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // reset the form
        form.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className={` ${theme === "light" ? "bg-white" : "bg-dark"}`}>
      {" "}
      <SectionWrapper>
        <div className={`hero pt-14 md:pt-20 pb-14 md:pb-20 font-inter `}>
          <div className="w-full ">
            <div className="text-center lg:text-left mb-5 md:mb-6">
              <h1
                className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
                  theme === "light" ? "text-title-color" : "text-white"
                }`}
              >
                Create Product
              </h1>
              <p
                className={`mt-2 pb-6 ${
                  theme === "light" ? "" : "text-gray-500"
                }`}
              >
                Please create a product by fill in the flowing fields.
              </p>
            </div>
            <div className={`w-full border `}>
              <form className=" p-6 " onSubmit={handleCreateProduct}>
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
                          Short Description
                        </span>
                      </label>
                      <textarea
                        type="text"
                        placeholder="Product description"
                        className="input input-bordered"
                        name="description"
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
                          <Ratings rev={5} id="73847"></Ratings>
                        </p>
                      </label>
                      <input
                        type="text"
                        defaultValue=""
                        placeholder="Product Rating"
                        className="input input-bordered"
                        name="rating"
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
                          Image URL
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Product image"
                        className="input input-bordered"
                        name="image"
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
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 text-center flex items-center">
                  <button className="btn w-1/4 btn-primary bg-primary  hover:btn">
                    Add Product
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

export default CreateProduct;
