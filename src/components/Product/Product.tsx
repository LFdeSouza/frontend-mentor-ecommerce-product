import { useCallback, useState } from "react";
import Gallery from "./Gallery";
import { IconCart, IconMinus, IconPlus } from "../Icons";
import GalleryViewer from "./GalleryViewer";
import { useProductsContext } from "../../hooks/ProductsProvider";
import { useCartContex } from "../../hooks/CartProvider";
import { currencyFormatter } from "../../utils/currencyFormatter";

interface Props {
  productId: number;
}
const Product: React.FC<Props> = ({ productId }) => {
  const [viewerOpen, setViewerOpen] = useState(false);

  const toggleViewer = useCallback(() => {
    if (!viewerOpen && window.innerWidth < 650) return;
    setViewerOpen(!viewerOpen);
  }, [viewerOpen]);

  const { products } = useProductsContext();
  const product = products?.[productId];

  const { cart, addToCart, removeUnitFromCart } = useCartContex();
  const cartItem = cart?.filter((i) => i.id === productId)[0];

  if (!product) return null;
  return (
    <>
      <div className="grid items-center sm:grid-cols-2 sm:py-20">
        <Gallery images={product.images} toggleViewer={toggleViewer} />

        <div className="mb-auto grid gap-3 p-6 sm:gap-10 sm:p-10 sm:pr-40 sm:pt-20">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-mainOrange sm:text-lg">
              {product.company}
            </p>
            <h1 className="text-2xl font-bold text-veryDarkGrayishBlue sm:text-5xl">
              {product.name}
            </h1>
          </div>

          <p className="text-sm leading-6 text-darkGrayishBlue sm:text-lg">
            {product.description}
          </p>

          <div className="flex items-center justify-between sm:flex-col sm:items-start">
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold text-veryDarkGrayishBlue sm:text-3xl">
                {product.discount
                  ? `${currencyFormatter.format(
                      product.price * (product.discount / 100),
                    )}`
                  : currencyFormatter.format(product.price)}
              </p>
              {
                <p className="rounded bg-paleOrange  px-2 font-bold text-mainOrange sm:text-base">
                  {product.discount ? `${product.discount}%` : null}
                </p>
              }
            </div>
            <p className="text-sm font-bold text-grayishBlue line-through sm:text-lg">
              {currencyFormatter.format(product.price)}
            </p>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-custom">
            <div className="flex justify-between rounded-lg bg-slate-50 p-4">
              <button
                onClick={() => removeUnitFromCart(productId)}
                className="px-2"
              >
                <IconMinus />
              </button>
              <p className="font-bold">{cartItem ? cartItem.quantity : 0}</p>
              <button onClick={() => addToCart(productId)} className="px-2">
                <IconPlus />
              </button>
            </div>

            <button
              onClick={() => addToCart(productId)}
              className="flex items-center justify-center gap-2 rounded-lg bg-mainOrange p-4 hover:bg-orange-300"
            >
              <IconCart fill="fill-white" />
              <p className=" text-white">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
      <GalleryViewer
        images={product.images}
        isOpen={viewerOpen}
        toggleViewer={toggleViewer}
      />
    </>
  );
};

export default Product;
