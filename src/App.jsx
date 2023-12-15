import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ShoppingProduct from "./components/ShoppingProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "./slice/shoppingSlice";

function App() {
  const {products} = useSelector(store => store.shopping)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateTotal())
  }, [products, dispatch])

  return (
    <div className="w-full flex flex-col justify-center font-primary">
      <h1 className="text-center text-gray-100 text-3xl font-medium mt-2 py-2">
        Shopping Card
      </h1>
      <Navbar/>
      <ShoppingProduct/>
    </div>
  );
}

export default App;
