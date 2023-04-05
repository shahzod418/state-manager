import { Action } from "../interfaces/action";

class Store<T = any> {
  private static instance: Store;
  private subscribers!: Record<string, (state: T) => T>;

  public state: T;

  constructor(private readonly rootReducer: (state: T, action: Action) => T) {
    // @ts-ignore
    this.state = this.rootReducer(this.state);
  }

  public static getInstance<T = any>(
    rootReducer: (state: T, action: Action) => T
  ): Store<T> {
    if (!Store.instance) {
      Store.instance = new Store(rootReducer);
    }

    return Store.instance;
  }

  public subscribe(key: string, callback: (state: T) => T) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  public unsubscribe(key: string) {
    delete this.subscribers[key];
  }

  public dispatch(action: Action) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((subscriberCallback) => {
      if (!!subscriberCallback && typeof subscriberCallback === "function") {
        subscriberCallback(this.state);
      }
    });
  }
}

export default Store;
