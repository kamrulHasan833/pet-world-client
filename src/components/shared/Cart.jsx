import PropTypes from "prop-types";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useTheme } from "../contexts/themeContext";

function Cart({ cart, handleDelete }) {
  const { imageURL, price, name, _id, quantity, date } = cart;
  const { theme } = useTheme();
  return (
    <>
      <tr className={theme === "light" ? "" : "text-gray-500"}>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 lg:w-48  rounded">
                <img src={imageURL} />
              </div>
            </div>
          </div>
        </td>
        <td>
          <h3 className="text-base md:text-lg lg:text-xl font-bold">{name}</h3>
        </td>
        <td>
          <p className="text-sm md:text-base lg:text-lg font-medium">{date}</p>
        </td>
        <td>
          <p className="text-sm md:text-base lg:text-lg font-medium">
            {quantity}
          </p>
        </td>
        <td>
          <p className="text-sm md:text-base lg:text-lg font-medium">
            ${price}
          </p>
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn text-base md:text-xl"
          >
            <RiDeleteBin5Line></RiDeleteBin5Line>
          </button>
        </th>
      </tr>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default Cart;
