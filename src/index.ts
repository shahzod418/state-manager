import Store from "./Store/Store";
import StoreProvider from "./components/StoreProvider";

import useDispatch from "./hooks/useDispatch";
import useSelector from "./hooks/useSelector";

const createStore = <T = any>(rootReducer: (state: T) => T) =>
  Store.getInstance<T>(rootReducer);

export { StoreProvider, createStore, useDispatch, useSelector };
