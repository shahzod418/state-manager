import { useContext, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import StoreContext from "../context/StoreContext";

import type Store from "../Store/Store";

const useSelector = <T = any>(selector: (state: Store["state"]) => T) => {
  const componentId = useRef(nanoid());
  const store = useContext(StoreContext);
  const [value, setValue] = useState(selector(store.state));

  useEffect(() => {
    store.subscribe(componentId.current, (state: T) =>
      setValue(selector(state))
    );

    return () => store.unsubscribe(componentId.current);
  }, []);

  return value;
};

export default useSelector;
