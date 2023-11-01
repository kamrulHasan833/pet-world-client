import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useTheme } from "../contexts/themeContext";
import SectionWrapper from "../layout/SectionWrapper";
import NoDataInfo from "../sections/NoDataInfo";
import Cart from "../shared/Cart";

function Carts() {
  const { theme } = useTheme();
  const loadData = useLoaderData();
  const newProducts =
    loadData && typeof loadData === "object" ? loadData : null;
  const [products, setProducts] = useState(newProducts);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice =
      products && Array.isArray(products) && products.length > 0
        ? products.reduce((a, cp) => a + cp.price * cp.quantity, 0)
        : 0;
    setTotal(totalPrice);
  }, [products]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you wanna delete this product, click Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://uniqueit-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const updateProduct = products.filter(
                (product) => product._id !== id
              );

              Swal.fire({
                icon: "success",
                title: "Success!",
                text: "You have deleted product successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              const newTotal =
                updateProduct && updateProduct.length > 0
                  ? updateProduct.reduce(
                      (a, cp) => a + cp.price * cp.quantity,
                      0
                    )
                  : 0;
              setTotal(newTotal);
              setProducts(updateProduct);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <main className={theme === "light" ? "bg-white" : "bg-dark"}>
      <SectionWrapper>
        <div className="flex justify-between items-center  font-inter">
          <h3
            className={`text-xl md:text-2xl lg:text-3xl font-bold mt-12 md:mt-16 mb-6 font-inter ${
              theme === "light" ? "" : "text-white"
            }`}
          >
            My Cart
          </h3>
          <Link
            to="/products/all"
            className="px-2 md:px-4 py-1 md:py-2 text-sm md:text-base text-white rounded-lg  bg-primary hover:bg-secondary"
          >
            Add More
          </Link>
        </div>

        {products && products.length > 0 ? (
          <>
            <div className="overflow-x-auto min-h-[50vh] pb-14 md:pb-24">
              <table className="table">
                {/* head */}
                <thead>
                  <tr
                    className={`text-base md:text-lg lg:text-xl ${
                      theme === "light" ? "" : "text-gray-400"
                    }`}
                  >
                    <th>Image</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((cart) => (
                    <Cart
                      key={cart._id}
                      cart={cart}
                      handleDelete={handleDelete}
                    ></Cart>
                  ))}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr className="border-t border-primary">
                    <th></th>
                    <th></th>
                    <th className="text-lg md:text-xl lg:text-2xl"> </th>
                    <th className="text-lg md:text-xl lg:text-2xl text-secondary">
                      {" "}
                      Subtotal =
                    </th>
                    <th className="text-lg md:text-xl lg:text-2xl text-secondary">
                      ${total}
                    </th>
                    <th>
                      <button className="btn btn-xs md:btn-md btn-primary bg-primary text-xs md:text-base uppercase">
                        Checkout
                      </button>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </>
        ) : (
          <>
            {" "}
            <NoDataInfo>Empty Cart</NoDataInfo>
          </>
        )}
      </SectionWrapper>
    </main>
  );
}

export default Carts;
