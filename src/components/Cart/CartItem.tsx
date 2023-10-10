import React from "react";
import { useProductsContext } from "../../hooks/ProductsProvider";
import { IconDelete } from "../Icons";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { useCartContex } from "../../hooks/CartProvider";

interface Props {
  id: number;
  quantity: number;
}

const CartItem: React.FC<Props> = ({ id, quantity }) => {
  const { removeFromCart } = useCartContex();
  const { products } = useProductsContext();
  const product = products?.[id];
  if (!product) return null;

  const correctedPrice = (product.price * product.discount) / 100;
  return (
    <div className="flex items-center gap-4 py-4">
      <img
        className="w-14 rounded-lg"
        src={`/${product.images.thumbnail[0]}`}
        alt={`${product.images.thumbnail[0]}`}
      />
      <div className="text-gray-500">
        <p className="">{product.name}</p>
        <p>
          {`${currencyFormatter.format(correctedPrice)} x ${quantity}`}{" "}
          <strong className="ml-4 text-gray-900">
            {currencyFormatter.format(correctedPrice * quantity)}
          </strong>
        </p>
      </div>
      <button onClick={() => removeFromCart(id)}>
        <IconDelete />
      </button>
    </div>
  );
};

export default CartItem;
