import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import CartProvider from "./hooks/CartProvider";
import ProductProvider from "./hooks/ProductsProvider";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <main className="mx-auto max-w-[1440px] font-Kumbh">
          <Header />
          <Product productId={0} />
        </main>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
