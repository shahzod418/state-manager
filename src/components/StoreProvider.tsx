import React, { FC, ReactNode } from "react";
import StoreContext from "../context/StoreContext";
import Store from "../Store/Store";

type Props = {
  children: ReactNode;
  store: Store;
};

const StoreProvider: FC<Props> = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
