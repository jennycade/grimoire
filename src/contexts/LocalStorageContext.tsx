import { ReactNode, createContext, useEffect, useState } from "react";

const DEFAULT_STORE_KEY = "spellbook";
const DEFAULT_EMPTY_STORE = [];

type StoreType = Object | Array<Object>;

type LocalStorageContextType = {
  store: StoreType;
  overwriteStore: (newStore: StoreType) => void;
  readStore: () => void;
};

export const LocalStorageContext = createContext<LocalStorageContextType>({
  store: [],
  overwriteStore: (newStore: StoreType) => null,
  readStore: () => null,
});

type LocalStorageProviderProps = {
  children: ReactNode;
  storeKey?: string;
};

export const LocalStorageProvider = ({
  children,
  storeKey = DEFAULT_STORE_KEY,
}: LocalStorageProviderProps) => {
  const [store, setStore] = useState<Object>({});

  const overwriteStore = (newStore: StoreType) => {
    setStore(newStore);

    const jsonStore = JSON.stringify(newStore);
    // TODO: cache existing store and restore when localStorage errors
    localStorage.setItem(storeKey, jsonStore);
  };

  const readStore = () => {
    const jsonStore = localStorage.getItem(storeKey);

    // TODO: don't silently overwrite store if the localstorage is empty
    const newStore = jsonStore ? JSON.parse(jsonStore) : {};

    setStore(newStore);
  };

  useEffect(readStore, [storeKey]);

  return (
    <LocalStorageContext.Provider value={{ store, overwriteStore, readStore }}>
      {children}
    </LocalStorageContext.Provider>
  );
};
