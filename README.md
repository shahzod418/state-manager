# state-manager

### Installation

```npm install davlatov-state-manager```

### Basic Example

```js
import { createStore, useSelector, useDispatch } from 'davlatov-state-manager';

const counterReducer = (state = { value: 0 }, action: Action) => {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore<ReturnType<typeof rootReducer>>(counterReducer);

const Counter: FC = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncremented = () => {
    dispatch({ type: 'counter/incremented' });
  };

  const handleDecremented = () => {
    dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <button onClick={handleIncremented}>incremented</button>
      <p>{count}</p>
      <button onClick={handleDecremented}>decremented</button>
    </div>
  );
}
```
