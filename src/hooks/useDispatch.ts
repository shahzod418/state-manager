import { useContext } from "react";
import StoreContext from "../context/StoreContext";

const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch.bind(store);
};

export default useDispatch;
