import { createContext } from "react";
import Store from "../Store/Store";

const StoreContext = createContext<Store>(null!);

export default StoreContext;
